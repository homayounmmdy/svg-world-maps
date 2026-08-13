#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get the map name from command line arguments
const mapName = process.argv[2];

// Get the optional height from command line arguments, default to 1000
let customHeight = 1000;
if (process.argv[3]) {
  const parsedHeight = parseInt(process.argv[3], 10);
  if (!isNaN(parsedHeight) && parsedHeight > 0) {
    customHeight = parsedHeight;
  } else {
    console.warn("⚠️ Invalid height provided. Using default height: 1000.");
  }
}

if (!mapName) {
  console.error(
    "❌ Please provide a map name. Usage: node scripts/register-map.js <map-name> [height]",
  );
  process.exit(1);
}

// Clean the name (lowercase, alphanumeric only)
const cleanName = mapName.toLowerCase().replace(/[^a-z0-9]/g, "");
if (!cleanName) {
  console.error("❌ Invalid map name. Use only letters and numbers.");
  process.exit(1);
}

console.log(`🚀 Adding new map: "${cleanName}" with height: ${customHeight}...`);

// Define file paths (adjust if your src folder is named differently)
const srcDir = path.join(__dirname, "../src");
const typesPath = path.join(srcDir, "types.ts");
const configPath = path.join(srcDir, "config.ts");
const indexPath = path.join(srcDir, "index.ts");
const mapDataDir = path.join(srcDir, "maps");

// Ensure maps directory exists
if (!fs.existsSync(mapDataDir)) {
  fs.mkdirSync(mapDataDir, { recursive: true });
}

// ==========================================
// 1. Update types.ts
// ==========================================
let typesContent = fs.readFileSync(typesPath, "utf8");
let typesUpdated = false;

// Add to MapType union (inserts before "world")
if (!typesContent.includes(`"${cleanName}"`)) {
  typesContent = typesContent.replace(
    /(\n)(\s*)(\|\s*"world";)/,
    `$1$2| "${cleanName}"$1$2$3`
  );
  typesUpdated = true;
}

// Add to JSDoc comments (inserts after "usa")
if (!typesContent.includes(`- '${cleanName}':`)) {
  typesContent = typesContent.replace(
    /(\s*\*\s*-\s*'usa':\s*Detailed map of usa with provinces\/states\n)/,
    `$1 * - '${cleanName}': Detailed map of ${cleanName} with provinces/states\n`,
  );
  typesUpdated = true;
}

if (typesUpdated) {
  fs.writeFileSync(typesPath, typesContent);
  console.log(`✅ Updated types.ts`);
} else {
  console.log(`ℹ️ types.ts already contains "${cleanName}"`);
}

// ==========================================
// 2. Update config.ts
// ==========================================
let configContent = fs.readFileSync(configPath, "utf8");
let configUpdated = false;

// Add to MAP_DATA_REGISTRY
if (!configContent.includes(`${cleanName}: undefined`)) {
  configContent = configContent.replace(
      /(export const MAP_DATA_REGISTRY = \{[\s\S]*?)(\n\} as const;)/,
      `$1    ${cleanName}: undefined,$2`,
  );
  configUpdated = true;
}

// Add to BASE_VIEWPORT_CONFIGS (inserts before "world") using customHeight
if (!configContent.includes(`${cleanName}: {`)) {
  configContent = configContent.replace(
    /(export const BASE_VIEWPORT_CONFIGS = \{[\s\S]*?)(\s*world: \{)/,
    `$1    ${cleanName}: {\n        height: ${customHeight},\n        width: 1000,\n        viewBox: "0 0 1000 ${customHeight}",\n        aspectRatio: 1000 / ${customHeight}\n    },\n$2`,
  );
  configUpdated = true;
}

// Add to SVG_VIEWPORT_CONFIGS (inserts before "world")
if (!configContent.includes(`${cleanName}: createMapViewportConfig`)) {
  configContent = configContent.replace(
    /(export const SVG_VIEWPORT_CONFIGS = \{[\s\S]*?)(world: createMapViewportConfig\(["']world["']\),)/,
    `$1${cleanName}: createMapViewportConfig("${cleanName}"),\n  $2`,
  );
  configUpdated = true;
}

if (!configContent.includes(`typeof BASE_VIEWPORT_CONFIGS.${cleanName}`)) {
  configContent = configContent.replace(
    /(\n)(\s*)(\|\s*typeof BASE_VIEWPORT_CONFIGS\.world,?)/,
    `$1$2| typeof BASE_VIEWPORT_CONFIGS.${cleanName}$1$2$3`
  );
  configUpdated = true;
}

if (configUpdated) {
  fs.writeFileSync(configPath, configContent);
  console.log(`✅ Updated config.ts`);
} else {
  console.log(`ℹ️ config.ts already contains "${cleanName}"`);
}

// ==========================================
// 3. Update index.ts
// ==========================================
let indexContent = fs.readFileSync(indexPath, "utf8");
let indexUpdated = false;

// Add to JSDoc comments in createMap (inserts after "usa")
if (!indexContent.includes(`npx register-map ${cleanName}`)) {
  indexContent = indexContent.replace(
    /(\s*\*\s*-\s*'usa':\s*Optional - requires registration via `npx register-map usa` ⚙️\n)/,
    `$1   *   - '${cleanName}': Optional - requires registration via \`npx register-map ${cleanName}\` ⚙️\n`,
  );
  indexUpdated = true;
}

if (indexUpdated) {
  fs.writeFileSync(indexPath, indexContent);
  console.log(`✅ Updated index.ts`);
} else {
  console.log(`ℹ️ index.ts already contains "${cleanName}"`);
}

console.log(`\n🎉 Successfully added "${cleanName}"!`);
console.log(`\n📝 Next steps:`);
console.log(`1. Update the dimensions in config.ts (BASE_VIEWPORT_CONFIGS.${cleanName}) if needed`);
console.log(`2. Import and register the data in config.ts:`);
console.log(`   import ${cleanName}Data from './maps/${cleanName}';`);
console.log(`   registerMapData('${cleanName}', ${cleanName}Data);`);