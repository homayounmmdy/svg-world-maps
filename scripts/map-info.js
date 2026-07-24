#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const MAPS_DIR = path.join(process.cwd(), "src", "maps", "optional");
const OUTPUT_FILE = path.join(process.cwd(), "MAPS_INFO.md");

/**
 * Extracts map information from a TypeScript file content.
 * @param {string} content - The raw string content of the .ts file.
 * @param {string} fileName - The name of the file (e.g., "GERMANY.ts").
 * @returns {Object} Extracted map metadata.
 */
function extractMapInfo(content, fileName) {
  // Command name is the file name without the .ts extension
  const command = fileName.replace(/\.ts$/i, "");

  // \b ensures we match "name" and not "codename". \s* allows flexible spacing around the colon.
  const nameMatch = content.match(/\bname\s*:\s*["']([^"']+)["']/);
  const mapName = nameMatch ? nameMatch[1] : command;

  const codeMatch = content.match(/\bcode\s*:\s*["']([^"']+)["']/);
    const mapCode = codeMatch ? codeMatch[1] : "N/A";

  // Count states using a robust bracket-matching approach.
  // This completely avoids bugs caused by nested arrays (e.g., aliases: ["A", "B"])
  // prematurely ending the regex match.
    let stateCount = 0;
  const statesMatch = content.match(/\bstates\s*:\s*\[/);
    if (statesMatch) {
    const startIndex = statesMatch.index + statesMatch[0].length;
    const restOfContent = content.slice(startIndex);

    let depth = 1;
    let endIndex = 0;
    for (let i = 0; i < restOfContent.length; i++) {
      const char = restOfContent[i];
      if (char === '[') depth++;
      else if (char === ']') depth--;

      if (depth === 0) {
        endIndex = i;
        break;
      }
    }

    if (endIndex > 0) {
      const statesBlock = restOfContent.slice(0, endIndex);
      const nameMatchesInStates = statesBlock.match(/\bname\s*:\s*["'][^"']*["']/g);
        stateCount = nameMatchesInStates ? nameMatchesInStates.length : 0;
    }
  }

  // Check if 'labels' array exists and contains at least one object.
  // \s*:\s* allows ANY amount of space around the colon (e.g., "labels : [")
  const hasLabels = /\blabels\s*:\s*\[[^\]]*\{/.test(content) ? "Yes" : "No";

    return {
    command,
        mapName,
        mapCode,
        stateCount,
        hasLabels,
    };
}

async function main() {
    try {
        // 1. Check if the maps directory exists
        if (!fs.existsSync(MAPS_DIR)) {
            console.error(`❌ Error: Directory not found at ${MAPS_DIR}`);
            console.log("Please ensure you are running this script from the project root.");
            process.exit(1);
        }

        // 2. Read all .ts files in the directory
        const files = fs.readdirSync(MAPS_DIR).filter((file) => file.endsWith(".ts"));

        if (files.length === 0) {
            console.log("⚠️ No .ts map files found in the directory.");
        }

        // 3. Process each file
        const mapInfos = files.map((file) => {
            const filePath = path.join(MAPS_DIR, file);
            const content = fs.readFileSync(filePath, "utf8");
            return extractMapInfo(content, file);
        });

        // 4. Sort alphabetically by country name for a cleaner table
        mapInfos.sort((a, b) => a.mapName.localeCompare(b.mapName));

    // 5. Generate timestamp
    const generatedAt = new Date().toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
    });

    // 6. Separate maps with and without labels for the summary
    const withLabels = mapInfos.filter((info) => info.hasLabels === "Yes");
    const withoutLabels = mapInfos.filter((info) => info.hasLabels === "No");

    // 7. Build the Markdown content
    let mdContent = `# Maps Information Report\n\n`;
    mdContent += `**📅 Last Generated:** ${generatedAt}\n\n`;
    mdContent += `## ℹ️ About this Report\n`;
    mdContent += `This report provides an automated overview of all available map configurations located in the \`${path.relative(process.cwd(), MAPS_DIR)}\` directory. \n\n`;
    mdContent += `- **Command**: The identifier used to reference to add map inside of your project.\n`;
    mdContent += `- **Country Name**: The human-readable name of the map.\n`;
    mdContent += `- **Code**: The standard short code assigned to the map.\n`;
    mdContent += `- **States**: The total number of state/countries objects defined in the map.\n`;
    mdContent += `- **Has Labels**: Indicates whether coordinate labels are defined for text placement on the map.\n\n`;
    mdContent += `## 🗺️ Map Details\n\n`;
    mdContent += `| Command | Country Name | Code | States/Countries | Has Labels |\n`;
    mdContent += `|---------|--------------|------|------------------|------------|\n`;

        for (const info of mapInfos) {
      mdContent += `| \`${info.command}\` | ${info.mapName} | ${info.mapCode} | ${info.stateCount} | ${info.hasLabels} |\n`;
        }

    // 8. Add the Label Support Summary Section
    mdContent += `\n## 📊 Label Support Summary\n\n`;
    mdContent += `- **✅ Maps with Labels:** ${withLabels.length}\n`;
    mdContent += `- **⚠️ Maps without Labels:** ${withoutLabels.length}\n\n`;

    if (withoutLabels.length > 0) {
      mdContent += `### ⚠️ Note on Maps Without Labels\n`;
      mdContent += `Some maps currently do not support the \`showLabel\` feature (if you set it to \`true\`, nothing will happen). This is due to a lack of available open-source map data, or because we haven't been able to find the correct coordinate labels for them yet.\n\n`;
      mdContent += `We are trying our best to find or create these labels. Please note that we are not professional SVG map designers, and this process takes time. Thank you for following and supporting us! 🙏\n\n`;

      mdContent += `### 🗺️ Maps Currently Without Labels\n`;
      mdContent += withoutLabels.map((info) => `- \`${info.command}\` (${info.mapName})`).join("\n") + "\n";
    } else {
      mdContent += `🎉 **Great news!** All maps currently support labels.\n`;
    }

    // 9. Write or update the Markdown file at the project root
        fs.writeFileSync(OUTPUT_FILE, mdContent, "utf8");

        console.log(`\n✅ Successfully updated ${OUTPUT_FILE}`);
    console.log(`📊 Processed ${mapInfos.length} map(s) (${withLabels.length} with labels, ${withoutLabels.length} without).`);
    } catch (error) {
        console.error("❌ Error generating map info:", error);
        process.exit(1);
    }
}

main();