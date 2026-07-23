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

  // Extract the first occurrence of 'name' (the map/country name)
    const nameMatch = content.match(/name:\s*["']([^"']+)["']/);
  const mapName = nameMatch ? nameMatch[1] : command;

  // Extract the first occurrence of 'code' (the map code)
    const codeMatch = content.match(/code:\s*["']([^"']+)["']/);
    const mapCode = codeMatch ? codeMatch[1] : "N/A";

    // Count states by isolating the 'states: [...]' block and counting 'name:' entries inside it
    let stateCount = 0;
    const statesMatch = content.match(/states:\s*\[([\s\S]*?)\](?:,|\s*})/);
    if (statesMatch) {
        const statesBlock = statesMatch[1];
        const nameMatchesInStates = statesBlock.match(/name:\s*["'][^"']*["']/g);
        stateCount = nameMatchesInStates ? nameMatchesInStates.length : 0;
    }

    // Check if the 'labels' array exists and contains at least one object
    const hasLabels = /labels:\s*\[\s*\{/.test(content) ? "Yes" : "No";

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

    // 6. Build the Markdown content
    let mdContent = `# Maps Information Report\n\n`;
    mdContent += `**📅 Last Generated:** ${generatedAt}\n\n`;
    mdContent += `## ℹ️ About this Report\n`;
    mdContent += `This report provides an automated overview of all available map configurations located in the \`${path.relative(process.cwd(), MAPS_DIR)}\` directory. \n\n`;
    mdContent += `- **Command**: The identifier used to reference or run this map (derived from the file name without the \`.ts\` extension).\n`;
    mdContent += `- **Country Name**: The human-readable name of the map.\n`;
    mdContent += `- **Code**: The standard short code assigned to the map.\n`;
    mdContent += `- **States**: The total number of state/region objects defined in the map.\n`;
    mdContent += `- **Has Labels**: Indicates whether coordinate labels are defined for text placement on the map.\n\n`;
    mdContent += `## 🗺️ Map Details\n\n`;
    mdContent += `| Command | Country Name | Code | States/Countries | Has Labels |\n`;
    mdContent += `|---------|--------------|------|--------|------------|\n`;

        for (const info of mapInfos) {
      mdContent += `| \`${info.command}\` | ${info.mapName} | ${info.mapCode} | ${info.stateCount} | ${info.hasLabels} |\n`;
        }

    // 7. Write or update the Markdown file at the project root
        fs.writeFileSync(OUTPUT_FILE, mdContent, "utf8");

        console.log(`\n✅ Successfully updated ${OUTPUT_FILE}`);
        console.log(`📊 Processed ${mapInfos.length} map(s).`);
    } catch (error) {
        console.error("❌ Error generating map info:", error);
        process.exit(1);
    }
}

main();