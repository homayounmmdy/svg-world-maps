#!/usr/bin/env node
import fs from "fs";
import path from "path";
import readline from "readline";
import { fileURLToPath } from 'url';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

async function main() {
  try {
    // 1. Ask user for inputs
    const mapName = await askQuestion("Enter SVG map name (e.g., germany): ");
    const code = await askQuestion("Enter map code (e.g., DE): ");
    const height = await askQuestion("Enter map height (e.g., 800): ");

    rl.close();

    // 2. Process inputs
    const mapNameUpper = mapName.toUpperCase(); // e.g., GERMANY
    const mapNameCapitalized =
      mapName.charAt(0).toUpperCase() + mapName.slice(1).toLowerCase(); // e.g., Germany

    // 3. Read the template file
    const templatePath = path.join(process.cwd(), "src/maps/optional/TEMPLATE.ts");
    let templateContent;

    if (fs.existsSync(templatePath)) {
      templateContent = fs.readFileSync(templatePath, "utf8");
    } else {
      console.log(
        "⚠️ Template file not found, using default fallback template...",
      );
      templateContent = fallbackTemplate;
    }

    // 4. Replace placeholders
    let newContent = templateContent;

    // Replace variable name and export (Fixing the typo in your example so it doesn't throw a ReferenceError)
    newContent = newContent.replace(/const TEMPLATE/g, `const ${mapNameUpper}`);
    newContent = newContent.replace(
      /export default TEMPLATE/g,
      `export default ${mapNameUpper}`,
    );

    // Replace name and code
    newContent = newContent.replace(
      /name: "Template"/g,
      `name: "${mapNameCapitalized}"`,
    );
    newContent = newContent.replace(/code: "TM"/g, `code: "${code}"`);

    // Replace viewBox height (replaces the 817 with the user's height)
    newContent = newContent.replace(
      /viewBox:\s*"0\s+0\s+1000\s+817"/g,
      `viewBox: "0 0 1000 ${height}"`,
    );

    // 5. Create the new file
    const outputDir = path.join(process.cwd(), "src/maps/optional");
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const outputPath = path.join(outputDir, `${mapNameUpper}.ts`);
    fs.writeFileSync(outputPath, newContent, "utf8");

    console.log(`\n✅ Successfully created ${outputPath}`);
  } catch (error) {
    console.error("❌ Error creating map:", error);
    rl.close();
  }
}

main();
