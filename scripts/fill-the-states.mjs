#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const SKIP_DIRS = new Set([
    "node_modules",
    ".git",
    "dist",
    "build",
    "coverage",
    ".next",
    ".cache",
    "out",
]);

const DRY = process.argv.includes("--dry");
const args = process.argv.slice(2).filter((x) => x !== "--dry");

if (args.length !== 1) {
    console.error(`
Usage:
  node scripts/fill-the-states.mjs <mapNameOrFolder> [--dry]

Examples:
  node scripts/fill-the-states.mjs DW
  node scripts/fill-the-states.mjs dw
  node scripts/fill-the-states.mjs src/maps/optional/DW
  node scripts/fill-the-states.mjs root/src/maps/optional/DW

Optional:
  --dry   Print the result without writing the file.
`);
    process.exit(1);
}

try {
    const input = args[0];

    const { tsFile, svgFile, mapName } = resolveInput(input);

    console.log(`Map name : ${mapName}`);
    console.log(`TS file  : ${tsFile}`);
    console.log(`SVG file : ${svgFile}`);

    const originalSource = fs.readFileSync(tsFile, "utf8");
    const hadCRLF = originalSource.includes("\r\n");

    let source = originalSource.replace(/\r\n/g, "\n");

    const svg = fs.readFileSync(svgFile, "utf8");
    const states = extractStatesFromSvg(svg);

    if (!states.length) {
        throw new Error(`No <path> elements were found in ${svgFile}.`);
    }

    const viewBox = getSvgViewBox(svg);

    if (viewBox) {
        source = updateStringProperty(source, "viewBox", viewBox);
    }

    source = replaceStatesArray(source, states);

    if (hadCRLF) {
        source = source.replace(/\n/g, "\r\n");
    }

    if (DRY) {
        console.log("\n--- DRY RUN: would write this file ---\n");
        console.log(source);
    } else {
        fs.writeFileSync(tsFile, source, "utf8");
        console.log(`Done. Wrote ${states.length} state(s) to ${tsFile}.`);
    }
} catch (error) {
    console.error(`ERROR: ${error.message}`);
    process.exit(1);
}

function resolveInput(input) {
    const cwd = process.cwd();
    const resolved = path.resolve(cwd, input);

    // Case 1: user passed the actual .ts file.
    if (isFile(resolved)) {
        if (!resolved.toLowerCase().endsWith(".ts")) {
            throw new Error("If you pass a file, it must be the map .ts file.");
        }

        const dir = path.dirname(resolved);
        const svgFile = findSvgFile(dir);

        if (!svgFile) {
            throw new Error(`Could not find map.svg near ${resolved}.`);
        }

        return {
            tsFile: resolved,
            svgFile,
            mapName: baseNameWithoutExt(resolved),
        };
    }

    // Case 2: user passed a folder containing the .ts file and map.svg.
    if (isDirectory(resolved)) {
        const preferredName = path.basename(resolved);
        const tsFile = findTsFile(resolved, preferredName);

        if (!tsFile) {
            throw new Error(`Could not find a map .ts file in ${resolved}.`);
        }

        const svgFile = findSvgFile(resolved);

        if (!svgFile) {
            throw new Error(`Could not find map.svg in ${resolved}.`);
        }

        return {
            tsFile,
            svgFile,
            mapName: baseNameWithoutExt(tsFile),
        };
    }

    // Case 3: user passed only the map name.
    // Example: DW, dw, JP, jp
    const searchName =
        input.includes("/") || input.includes("\\")
            ? path.basename(input)
            : input;

    const searchRoots = [
        "src/maps/optional",
        "src/maps",
        "root/src/maps/optional",
        "root/src/maps",
        "maps/optional",
        "maps",
        ".",
    ]
        .map((r) => path.resolve(cwd, r))
        .filter((r) => isDirectory(r));

    if (!searchRoots.length) {
        throw new Error(
            "No map folders found. Looked for src/maps/optional, root/src/maps/optional, maps, and current directory."
        );
    }

    // Try to find a folder with the map name.
    for (const root of searchRoots) {
        const dir = findDirByNameCaseInsensitive(root, searchName, 4);

        if (dir) {
            const tsFile = findTsFile(dir, path.basename(dir));

            if (tsFile) {
                const svgFile = findSvgFile(dir);

                if (svgFile) {
                    return {
                        tsFile,
                        svgFile,
                        mapName: baseNameWithoutExt(tsFile),
                    };
                }
            }
        }
    }

    // Try to find a .ts file directly.
    for (const root of searchRoots) {
        const tsFile = findFileByNameCaseInsensitive(
            root,
            `${searchName}.ts`,
            4
        );

        if (tsFile) {
            const dir = path.dirname(tsFile);
            const svgFile = findSvgFile(dir);

            if (svgFile) {
                return {
                    tsFile,
                    svgFile,
                    mapName: baseNameWithoutExt(tsFile),
                };
            }
        }
    }

    throw new Error(`Could not find a .ts file + map.svg for "${input}".`);
}

function findTsFile(dir, preferredName) {
    const preferredLower = String(preferredName || "").toLowerCase();

    const directTsFiles = listFiles(dir).filter(
        (entry) =>
            entry.name.toLowerCase().endsWith(".ts") &&
            !entry.name.toLowerCase().endsWith(".d.ts")
    );

    if (directTsFiles.length) {
        const preferred = directTsFiles.find(
            (entry) =>
                baseNameWithoutExt(entry.name).toLowerCase() === preferredLower
        );

        if (preferred) {
            return path.join(dir, preferred.name);
        }

        if (directTsFiles.length === 1) {
            return path.join(dir, directTsFiles[0].name);
        }

        const indexFile = directTsFiles.find(
            (entry) => entry.name.toLowerCase() === "index.ts"
        );

        if (indexFile) {
            return path.join(dir, indexFile.name);
        }

        throw new Error(
            `Multiple .ts files found in ${dir}. ` +
            `Provide a folder with one .ts file or name it ${preferredName}.ts.`
        );
    }

    const recursiveTsFiles = findFilesByExt(dir, ".ts", 4).filter(
        (file) => !file.toLowerCase().endsWith(".d.ts")
    );

    if (!recursiveTsFiles.length) {
        return null;
    }

    const preferred = recursiveTsFiles.find(
        (file) => baseNameWithoutExt(file).toLowerCase() === preferredLower
    );

    if (preferred) {
        return preferred;
    }

    if (recursiveTsFiles.length === 1) {
        return recursiveTsFiles[0];
    }

    const indexFile = recursiveTsFiles.find(
        (file) => path.basename(file).toLowerCase() === "index.ts"
    );

    if (indexFile) {
        return indexFile;
    }

    throw new Error(
        `Multiple .ts files found under ${dir}. ` +
        `Provide the exact folder containing the map TS file.`
    );
}

function findSvgFile(dir) {
    const directMapSvg = listFiles(dir).find(
        (entry) => entry.name.toLowerCase() === "map.svg"
    );

    if (directMapSvg) {
        return path.join(dir, directMapSvg.name);
    }

    const recursiveMapSvg = findFileByNameCaseInsensitive(
        dir,
        "map.svg",
        4
    );

    if (recursiveMapSvg) {
        return recursiveMapSvg;
    }

    const svgFiles = findFilesByExt(dir, ".svg", 4);

    if (!svgFiles.length) {
        return null;
    }

    if (svgFiles.length === 1) {
        return svgFiles[0];
    }

    const mapLikeSvg = svgFiles.find((file) =>
        path.basename(file).toLowerCase().includes("map")
    );

    return mapLikeSvg || svgFiles[0];
}

function extractStatesFromSvg(svg) {
    const content = extractFeaturesGroup(svg);

    const pathRegex =
        /<path\b[^>]*?(?:\/>|>(?:[\s\S]*?)<\/path>)/gi;

    const states = [];
    const seenCodes = new Set();

    let match;
    let autoIndex = 0;

    while ((match = pathRegex.exec(content))) {
        const tag = match[0];

        autoIndex += 1;

        const rawPath = getAttr(tag, "d");

        const rawCode =
            getAttr(tag, "id") ||
            getAttr(tag, "data-code") ||
            getAttr(tag, "data-id") ||
            getAttr(tag, "code");

        const titleMatch = tag.match(
            /<title[^>]*>([\s\S]*?)<\/title>/i
        );

        const rawName =
            getAttr(tag, "name") ||
            getAttr(tag, "data-name") ||
            getAttr(tag, "title") ||
            (titleMatch ? titleMatch[1] : "");

        let code = decodeXmlEntities(rawCode || "").trim();

        if (!code) {
            code = `STATE_${autoIndex}`;
        }

        let name = decodeXmlEntities(rawName || "").trim();

        if (!name) {
            name = code;
        }

        if (seenCodes.has(code)) {
            let suffix = 2;

            while (seenCodes.has(`${code}_${suffix}`)) {
                suffix += 1;
            }

            code = `${code}_${suffix}`;
        }

        seenCodes.add(code);

        const d = rawPath
            ? rawPath.replace(/\s+/g, " ").trim()
            : " ";

        states.push({
            name,
            code,
            path: d,
        });
    }

    return states;
}

function extractFeaturesGroup(svg) {
    const openRegex =
        /<g\b[^>]*\bid\s*=\s*(["'])features\1[^>]*>/i;

    const openMatch = openRegex.exec(svg);

    if (!openMatch) {
        return svg;
    }

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

function getSvgViewBox(svg) {
    const svgTagMatch = svg.match(/<svg\b[^>]*>/i);

    if (!svgTagMatch) {
        return null;
    }

    const viewBox = getAttr(svgTagMatch[0], "viewBox");

    if (!viewBox) {
        return null;
    }

    return viewBox.replace(/\s+/g, " ").trim();
}

function replaceStatesArray(source, states) {
    const statesRegex = /(^|[\s,{])(states\s*:\s*)\[/i;
    const match = statesRegex.exec(source);

    if (!match) {
        throw new Error('Could not find "states: [" in the TS file.');
    }

    const openIndex = match.index + match[0].length - 1;
    const keyIndex = match.index + match[1].length;

    const closeIndex = findMatchingBracket(source, openIndex);

    if (closeIndex === -1) {
        throw new Error("Could not find the closing bracket for states array.");
    }

    const lineStart = source.lastIndexOf("\n", keyIndex) + 1;
    const indentMatch = source.slice(lineStart, keyIndex).match(/^[ \t]*/);
    const indent = indentMatch ? indentMatch[0] : "";
    const unit = detectIndentUnit(source);

    const formatted = formatStatesArray(states, indent, unit);

    return source.slice(0, openIndex) + formatted + source.slice(closeIndex + 1);
}

function formatStatesArray(states, indent, unit) {
    if (!states.length) {
        return "[]";
    }

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

function updateStringProperty(source, key, value) {
    const regex = new RegExp(
        `(^|[\\s,{])(${escapeRegExp(key)}\\s*:\\s*)(["'])`,
        "i"
    );

    const match = regex.exec(source);

    if (!match) {
        return source;
    }

    const quoteIndex = match.index + match[0].length - 1;
    const endQuoteIndex = findMatchingQuote(source, quoteIndex);

    if (endQuoteIndex === -1) {
        return source;
    }

    return (
        source.slice(0, quoteIndex) +
        JSON.stringify(value) +
        source.slice(endQuoteIndex + 1)
    );
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
            if (char === "\n") {
                inLineComment = false;
            }
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

            if (depth === 0) {
                return i;
            }
        }
    }

    return -1;
}

function findMatchingQuote(source, quoteIndex) {
    const quote = source[quoteIndex];
    let escaped = false;

    for (let i = quoteIndex + 1; i < source.length; i += 1) {
        const char = source[i];

        if (escaped) {
            escaped = false;
            continue;
        }

        if (char === "\\") {
            escaped = true;
            continue;
        }

        if (char === quote) {
            return i;
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
    const regex = new RegExp(
        `(?:^|[\\s])${escapeRegExp(attr)}\\s*=\\s*(?:"([^"]*)"|'([^']*)')`,
        "i"
    );

    const match = tag.match(regex);

    if (!match) {
        return null;
    }

    return match[1] !== undefined ? match[1] : match[2];
}

function decodeXmlEntities(value) {
    return String(value)
        .replace(
            /&#x([0-9a-f]+);/gi,
            (_, hex) => String.fromCodePoint(parseInt(hex, 16))
        )
        .replace(
            /&#(\d+);/g,
            (_, dec) => String.fromCodePoint(parseInt(dec, 10))
        )
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

function baseNameWithoutExt(file) {
    return path.basename(file, path.extname(file));
}

function listFiles(dir) {
    try {
        return fs
            .readdirSync(dir, { withFileTypes: true })
            .filter((entry) => entry.isFile());
    } catch {
        return [];
    }
}

function isFile(filePath) {
    try {
        return fs.statSync(filePath).isFile();
    } catch {
        return false;
    }
}

function isDirectory(dirPath) {
    try {
        return fs.statSync(dirPath).isDirectory();
    } catch {
        return false;
    }
}

function findDirByNameCaseInsensitive(rootDir, dirName, maxDepth = 4) {
    const target = String(dirName).toLowerCase();
    const queue = [{ dir: rootDir, depth: 0 }];

    while (queue.length) {
        const { dir, depth } = queue.shift();

        let entries = [];

        try {
            entries = fs.readdirSync(dir, { withFileTypes: true });
        } catch {
            continue;
        }

        for (const entry of entries) {
            if (!entry.isDirectory()) {
                continue;
            }

            const full = path.join(dir, entry.name);

            if (entry.name.toLowerCase() === target) {
                return full;
            }

            if (depth < maxDepth && !SKIP_DIRS.has(entry.name)) {
                queue.push({ dir: full, depth: depth + 1 });
            }
        }
    }

    return null;
}

function findFileByNameCaseInsensitive(rootDir, fileName, maxDepth = 4) {
    const target = String(fileName).toLowerCase();
    const queue = [{ dir: rootDir, depth: 0 }];

    while (queue.length) {
        const { dir, depth } = queue.shift();

        let entries = [];

        try {
            entries = fs.readdirSync(dir, { withFileTypes: true });
        } catch {
            continue;
        }

        for (const entry of entries) {
            const full = path.join(dir, entry.name);

            if (entry.isFile() && entry.name.toLowerCase() === target) {
                return full;
            }

            if (entry.isDirectory() && depth < maxDepth && !SKIP_DIRS.has(entry.name)) {
                queue.push({ dir: full, depth: depth + 1 });
            }
        }
    }

    return null;
}

function findFilesByExt(rootDir, ext, maxDepth = 4) {
    const target = ext.toLowerCase();
    const result = [];
    const queue = [{ dir: rootDir, depth: 0 }];

    while (queue.length) {
        const { dir, depth } = queue.shift();

        let entries = [];

        try {
            entries = fs.readdirSync(dir, { withFileTypes: true });
        } catch {
            continue;
        }

        for (const entry of entries) {
            const full = path.join(dir, entry.name);

            if (entry.isFile() && entry.name.toLowerCase().endsWith(target)) {
                result.push(full);
            }

            if (entry.isDirectory() && depth < maxDepth && !SKIP_DIRS.has(entry.name)) {
                queue.push({ dir: full, depth: depth + 1 });
            }
        }
    }

    return result;
}