#!/usr/bin/env node
import fs from "fs";
import path from "path";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Fallback template in case TEMPLATE.ts doesn't exist yet
const fallbackTemplate = `const TEMPLATE = {
    name: "Template",
    code: "TM",
    viewBox: "0 0 1000 817",
    states: [
        {
            name: "temp",
            code: "TEMPL",
            path: " "
        },
    ],
    labels: [
        {
            code: "TEMPL",
            x: "481.1",
            y: "286.8",
            name: "temp"
        },
    ]
}

export default TEMPLATE`;

function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

// --- SVG & State Parsing Helpers ---
function extractStatesFromSvg(svg) {
  const content = extractFeaturesGroup(svg);
  const pathRegex = /<path\b[^>]*?(?:\/>|>(?:[\s\S]*?)<\/path>)/gi;
  const states = [];
  const seenCodes = new Set();
  let match;
  let autoIndex = 0;

  while ((match = pathRegex.exec(content))) {
    const tag = match[0];
    autoIndex += 1;

    const rawPath = getAttr(tag, "d");
    const rawCode = getAttr(tag, "id") || getAttr(tag, "data-code") || getAttr(tag, "data-id") || getAttr(tag, "code");
    const titleMatch = tag.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    const rawName = getAttr(tag, "name") || getAttr(tag, "data-name") || getAttr(tag, "title") || (titleMatch ? titleMatch[1] : "");

    let code = decodeXmlEntities(rawCode || "").trim();
    if (!code) code = `STATE_${autoIndex}`;

    let name = decodeXmlEntities(rawName || "").trim();
    if (!name) name = code;

    if (seenCodes.has(code)) {
      let suffix = 2;
      while (seenCodes.has(`${code}_${suffix}`)) suffix += 1;
      code = `${code}_${suffix}`;
    }
    seenCodes.add(code);

    const d = rawPath ? rawPath.replace(/\s+/g, " ").trim() : " ";
    states.push({ name, code, path: d });
  }

  return states;
}

function extractFeaturesGroup(svg) {
  const openRegex = /<g\b[^>]*\bid\s*=\s*(["'])features\1[^>]*>/i;
  const openMatch = openRegex.exec(svg);
  if (!openMatch) return svg;

  const start = openMatch.index + openMatch[0].length;
  const tokenRegex = /<g\b[^>]*?>|<\/g>/gi;
  tokenRegex.lastIndex = start;

  let depth = 1;
  let match;

  while ((match = tokenRegex.exec(svg))) {
    const token = match[0];
    if (token.toLowerCase().startsWith("</g")) {
      depth -= 1;
    } else if (!token.endsWith("/>")) {
      depth += 1;
    }
    if (depth === 0) {
      return svg.slice(start, match.index);
    }
  }
  return svg.slice(start);
}

function replaceStatesArray(source, states) {
  const statesRegex = /(^|[\s,{])(states\s*:\s*)\[/i;
  const match = statesRegex.exec(source);

  if (!match) throw new Error('Could not find "states: [" in the template.');

  const openIndex = match.index + match[0].length - 1;
  const keyIndex = match.index + match[1].length;
  const closeIndex = findMatchingBracket(source, openIndex);

  if (closeIndex === -1) throw new Error("Could not find the closing bracket for states array.");

  const lineStart = source.lastIndexOf("\n", keyIndex) + 1;
  const indentMatch = source.slice(lineStart, keyIndex).match(/^[ \t]*/);
  const indent = indentMatch ? indentMatch[0] : "";
  const unit = detectIndentUnit(source);

  const formatted = formatStatesArray(states, indent, unit);
  return source.slice(0, openIndex) + formatted + source.slice(closeIndex + 1);
}

function formatStatesArray(states, indent, unit) {
  if (!states.length) return "[]";

  const itemIndent = indent + unit;
  const propIndent = itemIndent + unit;

  const items = states.map((state) => {
    return [
      `${itemIndent}{`,
      `${propIndent}name: ${JSON.stringify(state.name)},`,
      `${propIndent}code: ${JSON.stringify(state.code)},`,
      `${propIndent}path: ${JSON.stringify(state.path)}`,
      `${itemIndent}}`,
    ].join("\n");
  });

  return `[\n${items.join(",\n")}\n${indent}]`;
}

function findMatchingBracket(source, openIndex) {
  let depth = 0;
  let inString = null;
  let escaped = false;
  let inLineComment = false;
  let inBlockComment = false;

  for (let i = openIndex; i < source.length; i += 1) {
    const char = source[i];
    const next = source[i + 1];

    if (inLineComment) {
      if (char === "\n") inLineComment = false;
      continue;
    }

    if (inBlockComment) {
      if (char === "*" && next === "/") {
        inBlockComment = false;
        i += 1;
      }
      continue;
    }

    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === inString) {
        inString = null;
      }
      continue;
    }

    if (char === "/" && next === "/") {
      inLineComment = true;
      i += 1;
      continue;
    }

    if (char === "/" && next === "*") {
      inBlockComment = true;
      i += 1;
      continue;
    }

    if (char === '"' || char === "'" || char === "`") {
      inString = char;
      escaped = false;
      continue;
    }

    if (char === "[") {
      depth += 1;
    }

    if (char === "]") {
      depth -= 1;
      if (depth === 0) return i;
    }
  }

  return -1;
}

function detectIndentUnit(source) {
  const lines = source.split("\n");
  for (const line of lines) {
    const match = line.match(/^([ \t]+)/);
    if (match) {
      return match[1].includes("\t") ? "\t" : "    ";
    }
  }
  return "    ";
}

function getAttr(tag, attr) {
  const regex = new RegExp(`(?:^|[\\s])${escapeRegExp(attr)}\\s*=\\s*(?:"([^"]*)"|'([^']*)')`, "i");
  const match = tag.match(regex);
  if (!match) return null;
  return match[1] !== undefined ? match[1] : match[2];
}

function decodeXmlEntities(value) {
  return String(value)
      .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
      .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(parseInt(dec, 10)))
      .replace(/&quot;/g, '"')
      .replace(/&apos;/g, "'")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&nbsp;/g, " ")
      .replace(/&amp;/g, "&");
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// --- Main Execution ---
async function main() {
  try {
    console.log("🗺️  Map Generator Tool\n");

    // 1. Ask user for inputs
    const mapName = await askQuestion("Enter SVG map name (e.g., germany): ");
    const code = await askQuestion("Enter map code (e.g., DE): ");
    const height = await askQuestion("Enter map height (e.g., 800): ");

    rl.close();

    if (!mapName || !code || !height) {
      console.error("❌ Error: All inputs are required.");
      process.exit(1);
    }

    // 2. Process inputs
    const mapNameUpper = mapName.toUpperCase(); // e.g., GERMANY
    const mapNameCapitalized = mapName.charAt(0).toUpperCase() + mapName.slice(1).toLowerCase(); // e.g., Germany

    // 3. Read the template file
    const templatePath = path.join(process.cwd(), "src/maps/optional/TEMPLATE.ts");
    let templateContent;

    if (fs.existsSync(templatePath)) {
      templateContent = fs.readFileSync(templatePath, "utf8");
    } else {
      console.log("⚠️ Template file not found, using default fallback template...");
      templateContent = fallbackTemplate;
    }

    // 4. Replace placeholders (Variables, Names, Viewbox Height)
    let newContent = templateContent;

    newContent = newContent.replace(/const TEMPLATE/g, `const ${mapNameUpper}`);
    newContent = newContent.replace(/export default TEMPLATE/g, `export default ${mapNameUpper}`);
    newContent = newContent.replace(/name: "Template"/g, `name: "${mapNameCapitalized}"`);
    newContent = newContent.replace(/code: "TM"/g, `code: "${code.toUpperCase()}"`);
    newContent = newContent.replace(/viewBox:\s*"0\s+0\s+1000\s+817"/g, `viewBox: "0 0 1000 ${height}"`);

    // 5. Extract states from map.svg and inject them into the file content
    const svgPath = path.join(process.cwd(), "src/maps/optional/map.svg");
    if (fs.existsSync(svgPath)) {
      console.log(`\n📂 Reading SVG from ${svgPath}...`);
      const svgContent = fs.readFileSync(svgPath, "utf8");
      const states = extractStatesFromSvg(svgContent);

      if (states.length > 0) {
        console.log(`✅ Extracted ${states.length} states from SVG.`);
        newContent = replaceStatesArray(newContent, states);
      } else {
        console.log("⚠️ No valid states found in <g id='features'>. Keeping template states.");
      }
    } else {
      console.log(`⚠️ Warning: map.svg not found at ${svgPath}. States will remain empty/template defaults.`);
    }

    // 6. Create the new file
    const outputDir = path.join(process.cwd(), "src/maps/optional");
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const outputPath = path.join(outputDir, `${mapNameUpper}.ts`);
    fs.writeFileSync(outputPath, newContent, "utf8");

    console.log(`\n🎉 Successfully created ${outputPath} with populated states!`);
  } catch (error) {
    console.error("❌ Error creating map:", error);
    rl.close();
  }
}

main();