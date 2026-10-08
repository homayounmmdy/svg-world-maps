#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import readline from 'readline';

const DATA_REPO = 'homayounmmdy/svg-world-maps-data';
const DATA_VERSION = 'main'; // switch to 'v1.0.0' once you tag it
const CDN = `https://cdn.jsdelivr.net/gh/${DATA_REPO}@${DATA_VERSION}/maps`;

const mapName = process.argv[2];

if (!mapName) {
  console.error('❌ Usage: npx add-map <map-name> (e.g., npx add-map usa)');
  process.exit(1);
}

if (mapName.toLowerCase() === 'world') {
  console.error('❌ The World Map is included by default. You do not need to add it.');
  process.exit(1);
}

const slug = mapName.toLowerCase();

async function urlExists(url) {
  try {
    const res = await fetch(url, { method: 'HEAD' });
    return res.ok;
  } catch {
    return false;
  }
}

async function resolveUrl() {
  // Try common casings because the GitHub repo may use USA.ts, usa.ts, etc.
  const candidates = [
    `${CDN}/${slug}.ts`,
    `${CDN}/${mapName}.ts`,
    `${CDN}/${mapName.toUpperCase()}.ts`,
  ];
  for (const url of candidates) {
    if (await urlExists(url)) return url;
  }
  return null;
}

function askQuestion(query) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise(resolve => rl.question(query, a => { rl.close(); resolve(a); }));
}

async function run() {
  const url = await resolveUrl();
  if (!url) {
    console.error(`❌ Map '${mapName}' not found on CDN.`);
    console.error(`   Browse available maps: https://github.com/${DATA_REPO}/tree/main/maps`);
    process.exit(1);
  }

  const dest = path.join(process.cwd(), 'src/maps', `${slug}.ts`);

  if (fs.existsSync(dest)) {
    console.warn(`⚠️  Map '${slug}' already exists in your project.`);
    const ans = await askQuestion('Do you want to overwrite it? (y/N): ');
    if (ans?.toLowerCase() !== 'y') {
      console.log('Aborted.');
      process.exit(0);
    }
  }

  let content;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    content = await res.text();
  } catch (err) {
    console.error('❌ Failed to download map:', err.message);
    process.exit(1);
  }

  try {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.writeFileSync(dest, content);
  } catch (err) {
    console.error('❌ Failed to write file:', err.message);
    process.exit(1);
  }

  const varName = `${slug.replace(/[^a-zA-Z0-9]/g, '_')}Data`;
  console.log(`
✅ ${slug} map added to your project!

📝 Now register it in your code:

import { registerMapData, createMap } from 'svg-world-maps';
import ${varName} from './src/maps/${slug}';

registerMapData('${slug}', ${varName});

const map = createMap('${slug}');
`);
}

run();