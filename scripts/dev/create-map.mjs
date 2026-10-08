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

// --- SVG Parsing Helpers ---
function getSvgViewBox(svg) {
  const svgTagMatch = svg.match(/<svg\b[^>]*>/i);
  if (!svgTagMatch) return null;
  return getAttr(svgTagMatch[0], "viewBox");
}

function extractGroup(svg, groupId) {
  const openRegex = new RegExp(`<g\\b[^>]*\\bid\\s*=\\s*(["'])${escapeRegExp(groupId)}\\1[^>]*>`, "i");
  const openMatch = openRegex.exec(svg);
  if (!openMatch) return "";

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

function extractStatesFromSvg(svg) {
  const content = extractGroup(svg, "features");
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

function extractLabelsFromSvg(svg) {
  const content = extractGroup(svg, "label_points");
  const circleRegex = /<circle\b[^>]*?(?:\/>|>(?:[\s\S]*?)<\/circle>)/gi;
  const labels = [];

  let match;
  while ((match = circleRegex.exec(content))) {
    const tag = match[0];

    const code = getAttr(tag, "id");
    const x = getAttr(tag, "cx");
    const y = getAttr(tag, "cy");
    let name = getAttr(tag, "class") || getAttr(tag, "name") || getAttr(tag, "data-name") || "";

    if (code && x && y) {
      labels.push({
        code: decodeXmlEntities(code).trim(),
        x: decodeXmlEntities(x).trim(),
        y: decodeXmlEntities(y).trim(),
        name: decodeXmlEntities(name).trim()
      });
    }
  }

  return labels;
}

// --- Template Replacement Helpers ---
function replaceArray(source, key, items, itemFormatter) {
  const regex = new RegExp(`(^|[\\s,{])(${escapeRegExp(key)}\\s*:\\s*)\\[`, "i");
  const match = regex.exec(source);

  if (!match) {
    console.warn(`Could not find "${key}: [" in the template.`);
    return source;
  }

  const openIndex = match.index + match[0].length - 1;
  const keyIndex = match.index + match[1].length;
  const closeIndex = findMatchingBracket(source, openIndex);

  if (closeIndex === -1) {
    console.warn(`Could not find the closing bracket for ${key} array.`);
    return source;
  }

  const lineStart = source.lastIndexOf("\n", keyIndex) + 1;
  const indentMatch = source.slice(lineStart, keyIndex).match(/^[ \t]*/);
  const indent = indentMatch ? indentMatch[0] : "";
  const unit = detectIndentUnit(source);

  const formatted = formatArray(items, indent, unit, itemFormatter);
  return source.slice(0, openIndex) + formatted + source.slice(closeIndex + 1);
}

function formatArray(items, indent, unit, itemFormatter) {
  if (!items.length) return "[]";

  const itemIndent = indent + unit;
  const propIndent = itemIndent + unit;

  const formattedItems = items.map((item) => itemFormatter(item, itemIndent, propIndent));
  return `[\n${formattedItems.join(",\n")}\n${indent}]`;
}

function formatStateItem(state, itemIndent, propIndent) {
  return [
    `${itemIndent}{`,
    `${propIndent}name: ${JSON.stringify(state.name)},`,
    `${propIndent}code: ${JSON.stringify(state.code)},`,
    `${propIndent}path: ${JSON.stringify(state.path)}`,
    `${itemIndent}}`,
  ].join("\n");
}

function formatLabelItem(label, itemIndent, propIndent) {
  return [
    `${itemIndent}{`,
    `${propIndent}code: ${JSON.stringify(label.code)},`,
    `${propIndent}x: ${JSON.stringify(label.x)},`,
    `${propIndent}y: ${JSON.stringify(label.y)},`,
    `${propIndent}name: ${JSON.stringify(label.name)}`,
    `${itemIndent}}`,
  ].join("\n");
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

    // 1. Ask user for inputs (Removed height question)
    const mapName = await askQuestion("Enter SVG map name (e.g., germany): ");
    const code = await askQuestion("Enter map code (e.g., DE): ");

    rl.close();

    if (!mapName || !code) {
      console.error("❌ Error: Map name and code are required.");
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

    let newContent = templateContent;

    // 4. Read SVG to extract viewBox automatically
    const svgPath = path.join(process.cwd(), "src/maps/optional/map.svg");
    let svgContent = "";
    let viewBox = "0 0 1000 817"; // fallback

    if (fs.existsSync(svgPath)) {
      console.log(`\n📂 Reading SVG from ${svgPath}...`);
      svgContent = fs.readFileSync(svgPath, "utf8");

      const extractedViewBox = getSvgViewBox(svgContent);
      if (extractedViewBox) {
        viewBox = extractedViewBox;
        console.log(`✅ Extracted viewBox from SVG: "${viewBox}"`);
      } else {
        console.log("⚠️ Could not find viewBox in SVG. Using default.");
      }
    } else {
      console.log(`⚠️ Warning: map.svg not found at ${svgPath}. Using default viewBox.`);
    }

    // 5. Replace placeholders (Variables, Names, Viewbox)
    newContent = newContent.replace(/const TEMPLATE/g, `const ${mapNameUpper}`);
    newContent = newContent.replace(/export default TEMPLATE/g, `export default ${mapNameUpper}`);
    newContent = newContent.replace(/name: "Template"/g, `name: "${mapNameCapitalized}"`);
    newContent = newContent.replace(/code: "TM"/g, `code: "${code.toUpperCase()}"`);

    // Replaces any existing viewBox string with the one dynamically extracted from the SVG
    newContent = newContent.replace(/viewBox:\s*"[^"]+"/g, `viewBox: "${viewBox}"`);

    // 6. Extract states & labels from map.svg and inject them into the file content
    if (svgContent) {
      // Extract and inject states
      const states = extractStatesFromSvg(svgContent);
      if (states.length > 0) {
        console.log(`✅ Extracted ${states.length} states from SVG.`);
        newContent = replaceArray(newContent, "states", states, formatStateItem);
      } else {
        console.log("⚠️ No valid states found in <g id='features'>. Keeping template states.");
      }

      // Extract and inject labels
      const labels = extractLabelsFromSvg(svgContent);
      if (labels.length > 0) {
        console.log(`✅ Extracted ${labels.length} labels from SVG.`);
        newContent = replaceArray(newContent, "labels", labels, formatLabelItem);
      } else {
        console.log("⚠️ No valid labels found in <g id='label_points'>. Keeping template labels.");
      }
    } else {
      console.log(`⚠️ Warning: map.svg was not loaded. States and labels will remain empty/template defaults.`);
    }

    // 7. Create the new file
    const outputDir = path.join(process.cwd(), "src/maps/optional");
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const outputPath = path.join(outputDir, `${mapNameUpper}.ts`);
    fs.writeFileSync(outputPath, newContent, "utf8");

    console.log(`\n🎉 Successfully created ${outputPath} with populated states and labels!`);
  } catch (error) {
    console.error("❌ Error creating map:", error);
    rl.close();
  }
}

main();