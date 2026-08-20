/**
 * svg-world-maps
 * 
 * ⚠️ MAP DATA LICENSING EXCEPTION ⚠️
 * -----------------------------------------------------------------------------
 * The underlying SVG map data (including paths, viewBox coordinates, element 
 * IDs, and labels) consumed by this library is sourced from SimpleMaps 
 * (https://simplemaps.com).
 * 
 * This specific map data is governed by the SimpleMaps SVG Map Library License 
 * (https://simplemaps.com/resources/svg-license) and is NOT covered by the 
 * MIT license of this project.
 * 
 * You are free to use these maps in personal or commercial projects in 
 * accordance with the SimpleMaps license. However, you may not redistribute 
 * the raw map data "as is" without adding value, and attribution to 
 * SimpleMaps is highly appreciated as per their terms.
 * -----------------------------------------------------------------------------
 */

import {
  DEFAULT_MAP_OPTIONS,
  MAP_DATA_REGISTRY,
  SVG_VIEWPORT_CONFIGS,
} from "./config.js";
import type {
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
 * Creates an SVG map string for the specified map type
 *
 * @param mapType - Type of map to generate
 *   - `'world'`: Always available ✅
 *   - `'usa'`: Optional - requires registration via `npx add-map usa` ⚙️
 *   - `'india'`: Optional - requires registration via `npx add-map india` ⚙️
 *   - `'europe'`: Optional - requires registration via `npx add-map europe` ⚙️
 *   - For the full list of supported countries, see `MAPS_INFO.md` located in the root of the project.
 * @param options - Optional styling configuration for the map
 * @returns Complete SVG string representing the map
 *
 * @example
 * // Create a world map with custom colors and size
 * const worldMap = createMap('world', {
 *   background: '#e6f3ff',
 *   borders: '#2c3e50',
 *   size: 'xl'
 * });
 *
 * @example
 * // Create USA map at 50% scale
 * const usaMap = createMap('usa', {
 *   size: 0.5
 * });
 *
 * @throws {Error} If the map type is not found in the registry
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
  </svg>`;
};

export default createMap;