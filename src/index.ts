/**
 * svg-world-maps
 *
 * ⚠️  MAP DATA LICENSING NOTICE  ⚠️
 * -----------------------------------------------------------------------------
 * This package (svg-world-maps) does NOT bundle SVG map data for optional
 * maps. Map data is distributed separately and fetched on demand via the
 * `npx add-map <name>` CLI.
 *
 *   Data repo: https://github.com/homayounmmdy/svg-world-maps-data
 *   License:   SimpleMaps SVG Map Library License
 *              https://simplemaps.com/resources/svg-license
 *
 * The underlying SVG map data (paths, viewBox coordinates, element IDs, and
 * labels) originates from SimpleMaps (https://simplemaps.com) and is NOT
 * covered by the MIT license of this project. It may be used in personal or
 * commercial projects in accordance with the SimpleMaps license.
 *
 * The raw map data may NOT be redistributed "as is" or as a standalone
 * product without prior written permission from SimpleMaps. Attribution to
 * SimpleMaps is appreciated as per their terms.
 * -----------------------------------------------------------------------------
 */

import {
    DEFAULT_CAPITALS_STYLE,
    DEFAULT_MAP_OPTIONS,
    MAP_DATA_REGISTRY,
    SVG_VIEWPORT_CONFIGS,
} from "./config.js";
import type {
    CapitalsOption,
    MapData,
    MapOptions,
    MapState,
    MapType,
    PathData,
} from "./types";

export { registerMapData } from "./config.js";

// Counter to ensure every map instance gets a unique CSS class
let mapInstanceCounter = 0;

/**
 * Type guard to check if state has multiple paths
 */
const hasMultiplePaths = (
  state: MapState,
): state is MapState & { paths: PathData[] } => {
  return "paths" in state && Array.isArray(state.paths);
};

/**
 * Type guard to check if state has a single path
 */
const hasSinglePath = (
  state: MapState,
): state is MapState & { path: string } => {
  return "path" in state && typeof state.path === "string";
};

/**
 * Extracts states from map data based on map type
 * @param mapData - The map data containing states
 * @returns Array of map states (either states or countries)
 * @throws {Error} If map data contains no states
 */
const extractStates = (mapData: MapData): MapState[] => {
  if (mapData.countries && mapData.countries.length > 0) {
    return mapData.countries;
  }
  if (mapData.states && mapData.states.length > 0) {
    return mapData.states;
  }

  console.error("Map data structure:", mapData);
  throw new Error("Invalid map data: missing both states and countries arrays");
};

/**
 * Escapes special characters for safe inclusion in XML/SVG
 */
const escapeXml = (unsafe: string): string => {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
};

/**
 * Generates SVG path elements for all states in the map
 * @param mapData - The map data containing state information
 * @param options - Styling options for the map states
 * @returns String of concatenated SVG path elements
 */
const generateStatePaths = (
  mapData: MapData,
  options: MapOptions = {},
): string => {
  const mergedOptions: Required<MapOptions> = {
    ...DEFAULT_MAP_OPTIONS,
    ...options,
  };

  try {
    const states = extractStates(mapData);

    const uniqueId = `map-${++mapInstanceCounter}`;
    const stateClass = `state-${uniqueId}`;

    const styleBlock = `
        <style>
            .${stateClass}:hover {
                fill: ${mergedOptions.hoverColor};
                transition: fill 0.2s ease;
                cursor: pointer;
            }
            .map-label {
                font-family: sans-serif;
                font-size: 65%;
                fill: #333;
                text-anchor: middle;
                dominant-baseline: middle;
                pointer-events: none; 
                user-select: none;
            }
        </style>
    `;

    if (states.length === 0) {
      console.warn("No states found in map data");
      return "";
    }

    const paths = states
      .map((state: MapState) => {
        const commonAttrs = `
                id="${state.code}"
                data-code="${state.code}"
                data-name="${state.name}"
                class="${stateClass}"
                fill="${mergedOptions.background}"
                stroke="${mergedOptions.borders}"
            `;

        // Generate the <title> tag for the native hover popup
        const titleTag = mergedOptions.showTooltip
          ? `<title>${escapeXml(state.name)}</title>`
          : '';

        // Handle states with multiple paths (like islands or territories)
        if (hasMultiplePaths(state)) {
          return state.paths
            .map((pathData: PathData, index: number) => {
              if (index === 0) {
                return `<path 
                                d="${pathData.d}" 
                                ${commonAttrs}
                                name="${state.name}"
                            >${titleTag}</path>`;
              }
              return `<path 
                                d="${pathData.d}" ${commonAttrs}
                            >${titleTag}</path>`;
            })
            .join("");
        }

        // Handle single path states
        if (hasSinglePath(state)) {
          return `<path 
                d="${state.path}" 
                ${commonAttrs}
                name="${state.name}"
            >${titleTag}</path>`;
        }

        console.warn(`State has no valid path data`, state);
        return "";
      })
      .filter(Boolean)
      .join("");

    return styleBlock + paths;
  } catch (error) {
    console.error("Error generating state paths:", error);
    throw error;
  }
};

/**
 * Generates SVG text elements for map labels
 * @param mapData - The map data containing label information
 * @param options - Styling options for the map
 * @returns String of concatenated SVG text elements
 */
const generateLabels = (mapData: MapData, options: MapOptions = {}): string => {
  const mergedOptions: Required<MapOptions> = {
    ...DEFAULT_MAP_OPTIONS,
    ...options,
  };

  // Only render if user enabled it and labels exist in the map data
  if (
    !mergedOptions.showLabels ||
    !mapData.labels ||
    mapData.labels.length === 0
  ) {
    return "";
  }

  return mapData.labels
    .map((label) => {
      return `<text 
                x="${label.x}" 
                y="${label.y}" 
                data-code="${label.code}"
                class="map-label"
                stroke-width="0"
            >${label.name}</text>`;
    })
    .join("\n");
};

/**
 * Normalizes any accepted shape of `CapitalsOption` into a flat, resolved
 * style the renderer can consume without branching.
 *
 * @remarks
 * - `false` / `undefined` → disabled
 * - `true`                → enabled, defaults applied
 * - `CapitalsConfig`      → enabled, user overrides merged over defaults
 */
const resolveCapitals = (option: CapitalsOption | undefined) => {
    if (!option) {
        return { enabled: false, ...DEFAULT_CAPITALS_STYLE };
    }
    if (option === true) {
        return { enabled: true, ...DEFAULT_CAPITALS_STYLE };
    }
    return {
        enabled: true,
        ...DEFAULT_CAPITALS_STYLE,
        ...option,
    };
};

/**
 * Generates SVG `<g>` elements for every capital marker in the map data.
 *
 * @remarks
 * Each capital is rendered as a small circle with a white stroke, wrapped in
 * a `<g>` that carries `data-code`, `data-name`, and `data-capital="true"`
 * so consumers can hook click / hover handlers with the same pattern used
 * for `<path>` states.
 *
 * Returns an empty string when either:
 * - `options.capitals` is falsy, or
 * - the map data contains no `capitals` array.
 *
 * @param mapData - Map data containing an optional `capitals` array
 * @param options - Map options; `capitals` enables rendering and
 *                  `capitalColor` controls the marker fill
 * @returns Concatenated SVG markup for all capital markers (may be empty)
 */
const generateCapitals = (
  mapData: MapData,
  options: MapOptions = {},
): string => {
  const { enabled, color } = resolveCapitals(options.capitals);

  if (!enabled || !mapData.capitals?.length) return "";

  return mapData.capitals
    .map((cap) => {
      const name = escapeXml(cap.name);
      return `<g class="map-capital"
                 data-code="${cap.code ?? ""}"
                 data-name="${name}"
                 data-capital="true">
          <title>${name}</title>
          <circle cx="${cap.x}" cy="${cap.y}" r="4"
                  fill="${color}"
                  stroke="#ffffff" stroke-width="1.5" />
        </g>`;
    })
    .join("\n");
};

/**
 * Generates a fully-formed SVG string for the specified map.
 *
 * @remarks
 * - The `'world'` map is bundled by default. All other maps are **opt-in** to
 *   keep the initial bundle small — register them first via `registerMapData`
 *   (or the `npx add-map` CLI) before calling `createMap`.
 * - The returned string is safe to inject with `innerHTML` /
 *   `dangerouslySetInnerHTML`. State boundaries expose `data-code` and
 *   `data-name`, so click handlers can read the selected region without
 *   extra wiring.
 * - Capital markers (when enabled) are rendered **above** states and labels,
 *   and expose `data-capital="true"` alongside `data-code` / `data-name`.
 *
 * @param mapType - The map identifier. Must be a key of `MapType`.
 *   - `'world'` — always available ✅
 *   - `'usa' | 'india' | 'europe' | 'iran' | …` — require registration via
 *     `npx add-map <name>` ⚙️
 *   - See `MAPS_INFO.md` in the project root for the full list of 212+ maps.
 *
 * @param options - Optional styling and behavior configuration. Every field
 *   falls back to `DEFAULT_MAP_OPTIONS` when omitted.
 *
 * @returns A complete SVG document as a string, including the `<svg>` wrapper,
 *   inline `<style>` for hover states, and (when enabled) capital markers.
 *
 * @throws {Error} When `mapType` is not registered. For non-`world` maps the
 *   error message includes the exact CLI command and `registerMapData` snippet
 *   needed to fix it.
 *
 * @example
 * // World map with custom colors and size
 * const worldMap = createMap('world', {
 *   background: '#e6f3ff',
 *   borders: '#2c3e50',
 *   hoverColor: '#d0e0ff',
 *   size: 'xl',
 * });
 *
 * @example
 * // Country map at 50% scale with labels
 * const usaMap = createMap('usa', {
 *   size: 'sm',
 *   showLabels: true,
 * });
 *
 * @example
 * // Capital markers — only rendered on maps that ship capital data
 * const iranMap = createMap('iran', {
 *   capitals: true,               // default style
 * });
 *
 * @example
 * // Capital markers with a custom color
 * const japanMap = createMap('japan', {
 *   background: 'red',
 *   capitals: { color: 'black' },
 * });
 *
 * @example
 * // Vanilla JS: hook clicks on states and capitals
 * container.innerHTML = createMap('iran', { capitals: true });
 * container.addEventListener('click', (e) => {
 *   const el = e.target.closest('path, [data-capital]');
 *   if (!el) return;
 *   console.log(el.dataset.name, el.dataset.code);
 * });
 */
export const createMap = (
  mapType: MapType,
  options: MapOptions = {},
): string => {
  const mapData = MAP_DATA_REGISTRY[mapType];

  if (!mapData) {
    // ✨ Super helpful error for optional maps
    if (mapType.toLowerCase() !== "world") {
      const safeVarName = `${mapType.replace(/[^a-zA-Z0-9]/g, "_")}Data`;
      const importPath = `./src/maps/${mapType}`;
      throw new Error(
        `Map "${mapType}" is not registered.\n\n` +
        `💡 This map is optional to keep bundle size small.\n` +
        `✅ To add it, run:\n` +
        `   npx add-map ${mapType}\n\n` +
        `📝 Then register it in your code:\n` +
        `   import { registerMapData } from 'svg-world-maps';\n` +
        `   import ${safeVarName} from '${importPath}';\n` +
        `   registerMapData('${mapType}', ${safeVarName});`,
      );
    }

    throw new Error(`Map type "${mapType}" not found in registry`);
  }

  const viewportConfig = SVG_VIEWPORT_CONFIGS[mapType]?.getConfig(
    options.size || "lg",
  );

  return `<svg 
    xmlns="http://www.w3.org/2000/svg" 
    height="${viewportConfig?.height}" 
    width="${viewportConfig?.width}"
    viewBox="${mapData.viewBox}"
    preserveAspectRatio="xMidYMid meet">
        ${generateStatePaths(mapData as MapData, options)}
        ${generateLabels(mapData as MapData, options)}
        ${generateCapitals(mapData as MapData, options)}
  </svg>`;
};

export default createMap;