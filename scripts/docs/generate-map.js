#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ─── Configuration ───────────────────────────────────────────────────────────
const CONFIG_PATH = path.join(__dirname, "maps.config.json");
const COMPONENT_TEMPLATE_PATH = path.join(__dirname, "templates", "component.tpl");
const DOC_TEMPLATE_PATH = path.join(__dirname, "templates", "doc.tpl");

const PROJECT_ROOT = process.cwd();
const COMPONENTS_OUTPUT_DIR = path.join(PROJECT_ROOT, "docs", "components","maps");
const DOCS_OUTPUT_DIR = path.join(PROJECT_ROOT, "docs", "docs", "maps");

// ─── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Convert a 2-letter country code to a flag emoji.
 * e.g., "CA" → 🇨🇦
 */
function codeToFlagEmoji(code) {
  if (!code || code.length !== 2) return "🗺️";
  const upper = code.toUpperCase();
  return String.fromCodePoint(
    ...[...upper].map((c) => 0x1f1e6 + c.charCodeAt(0) - 65),
  );
}

/**
 * Convert a name to a URL/folder-friendly slug.
 * e.g., "United States America" → "united-states-america"
 */
function toSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

/**
 * Convert a name to a PascalCase component name.
 * e.g., "United States America" → "UnitedStatesAmerica"
 */
function toPascalCase(name) {
  return name
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

/**
 * Extract RGB values from an rgba string.
 * e.g., "rgba(255, 0, 0, 0.35)" → "255, 0, 0"
 */
function extractRgb(rgbaString) {
  const match = rgbaString.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (match) return `${match[1]}, ${match[2]}, ${match[3]}`;
  return "0, 153, 51";
}

/**
 * Pluralize a region label (simple heuristic).
 */
function pluralize(label) {
  if (!label) return "regions";
  const lower = label.toLowerCase();
  if (lower.endsWith("s")) return label + "es";
  if (lower.endsWith("y")) return label.slice(0, -1) + "ies";
  return label + "s";
}

/**
 * Replace template variables with actual values.
 */
function renderTemplate(template, vars) {
  let result = template;
  for (const [key, value] of Object.entries(vars)) {
    const regex = new RegExp(`{{${key}}}`, "g");
    result = result.replace(regex, value);
  }
  return result;
}

/**
 * Ensure a directory exists, creating it recursively if needed.
 */
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// ─── Main Logic ──────────────────────────────────────────────────────────────

function main() {
  // 1. Read configuration
  if (!fs.existsSync(CONFIG_PATH)) {
    console.error(`❌ Config file not found: ${CONFIG_PATH}`);
    process.exit(1);
  }

  const config = JSON.parse(fs.readFileSync(CONFIG_PATH, "utf-8"));
  const { defaults, maps } = config;

  if (!maps || !Array.isArray(maps) || maps.length === 0) {
    console.error("❌ No maps defined in config.");
    process.exit(1);
  }

  // 2. Read templates
  if (!fs.existsSync(COMPONENT_TEMPLATE_PATH)) {
    console.error(
      `❌ Component template not found: ${COMPONENT_TEMPLATE_PATH}`,
    );
    process.exit(1);
  }
  if (!fs.existsSync(DOC_TEMPLATE_PATH)) {
    console.error(`❌ Doc template not found: ${DOC_TEMPLATE_PATH}`);
    process.exit(1);
  }

  const componentTemplate = fs.readFileSync(COMPONENT_TEMPLATE_PATH, "utf-8");
  const docTemplate = fs.readFileSync(DOC_TEMPLATE_PATH, "utf-8");

  // 3. Ensure output directories exist
  ensureDir(COMPONENTS_OUTPUT_DIR);
  ensureDir(DOCS_OUTPUT_DIR);

  // 4. Process each map
  let sidebarPosition = 20; // Start after existing docs

  for (const map of maps) {
    const {
      name,
      code,
      regionLabel = defaults.regionLabel || "Province",
      hoverColor = defaults.hoverColor || "rgba(0, 153, 51, 0.35)",
      description = (defaults.description || "").replace("{name}", name),
      borders = defaults.borders || "#1e293b",
    } = map;

    if (!name || !code) {
      console.warn(`⚠️  Skipping map with missing name or code:`, map);
      continue;
    }

    // Derive values
    const folderName = code.toLowerCase();
    const mapId = toSlug(name);
    const svgFileName = `${mapId}.svg`;
    const componentName = `${toPascalCase(name)}Map`;
    const dataFile = name.toUpperCase().replace(/\s+/g, "_");
    const flagEmoji = codeToFlagEmoji(code);
    const themeColorRgb = extractRgb(hoverColor);
    const regionLabelPlural = pluralize(regionLabel);
    const regionLabelLower = regionLabel.toLowerCase();
    const slug = toSlug(name);

    // Build template variables
    const vars = {
      name,
      code,
      folderName,
      mapId,
      svgFileName,
      componentName,
      dataFile,
      flagEmoji,
      hoverColor,
      themeColorRgb,
      regionLabel,
      regionLabelPlural,
      regionLabelLower,
      borders,
      description,
      overviewText: description,
      sidebarPosition: sidebarPosition.toString(),
      codeUpper: code.toUpperCase(),
    };

    // ─── Generate Component ──────────────────────────────────────────────
    const componentDir = path.join(COMPONENTS_OUTPUT_DIR, folderName);
    ensureDir(componentDir);

    const componentContent = renderTemplate(componentTemplate, vars);
    const componentPath = path.join(componentDir, "index.tsx");

    fs.writeFileSync(componentPath, componentContent, "utf-8");
    console.log(`✅ Component: ${path.relative(PROJECT_ROOT, componentPath)}`);

    // ─── Generate Doc ────────────────────────────────────────────────────
    const docContent = renderTemplate(docTemplate, vars);
    const docPath = path.join(DOCS_OUTPUT_DIR, `${slug}.mdx`);

    fs.writeFileSync(docPath, docContent, "utf-8");
    console.log(`✅ Doc:       ${path.relative(PROJECT_ROOT, docPath)}`);

    sidebarPosition++;
  }

  console.log(`\n🎉 Done! Generated ${maps.length} map(s).`);
}

// ─── Run ─────────────────────────────────────────────────────────────────────
main();
