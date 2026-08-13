import World from "./maps/World";
import type { MapOptions, MapSize } from "./types";

/**
 * Map data registry containing all available map configurations
 */
export const MAP_DATA_REGISTRY = {
  world: World,
  afghanistan: undefined,
  australia: undefined,
  brazil: undefined,
  france: undefined,
  gb: undefined,
  germany: undefined,
  india: undefined,
  iran: undefined,
  netherlands: undefined,
  usa: undefined,
  europe: undefined,
  belgium: undefined,
  pakistan: undefined,
  switzerland: undefined,
  canada: undefined,
  argentina: undefined,
  armenia: undefined,
  austria: undefined,
  denmark: undefined,
  finland: undefined,
  greenland: undefined,
  iceland: undefined,
  israel: undefined,
  kuwait: undefined,
  lebanon: undefined,
  luxembourg: undefined,
  norway: undefined,
  oman: undefined,
  poland: undefined,
  singapore: undefined,
  sweden: undefined,
  uae: undefined,
  vatican: undefined,
  albania: undefined,
  algeria: undefined,
  andorra: undefined,
  angola: undefined,
  anguilla: undefined,
} as const;

export const registerMapData = (type: string, data: any) => {
  (MAP_DATA_REGISTRY as any)[type] = data;
};

/**
 * Base viewport configuration for each map type
 * These are the original/optimal dimensions for each map
 */
export const BASE_VIEWPORT_CONFIGS = {
  afghanistan: {
    height: 457.2,
    width: 600,
    viewBox: "0 0 600 457.2",
    aspectRatio: 600 / 457.2,
  },
  australia: {
    height: 966,
    width: 1000,
    viewBox: "0 0 1000 966",
    aspectRatio: 1000 / 966,
  },
  brazil: {
    height: 912,
    width: 1000,
    viewBox: "0 0 1000 912",
    aspectRatio: 1000 / 912,
  },
  france: {
    height: 960,
    width: 1000,
    viewBox: "0 0 1000 960",
    aspectRatio: 1000 / 960,
  },
  gb: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  germany: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  india: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  iran: {
    height: 593.71021,
    width: 654.51147,
    viewBox: "0 0 654.51147 593.71021",
    aspectRatio: 654.51147 / 593.71021,
  },
  netherlands: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  usa: {
    height: 589,
    width: 1000,
    viewBox: "0 0 1000 589",
    aspectRatio: 1000 / 589,
  },
  europe: {
    height: 684,
    width: 1000,
    viewBox: "0 0 1000 684",
    aspectRatio: 1000 / 684,
  },
  belgium: {
    height: 817,
    width: 1000,
    viewBox: "0 0 1000 817",
    aspectRatio: 1000 / 817,
  },
  switzerland: {
    height: 641,
    width: 1000,
    viewBox: "0 0 1000 641",
    aspectRatio: 1000 / 641,
  },
  pakistan: {
    height: 959,
    width: 1000,
    viewBox: "0 0 1000 959",
    aspectRatio: 1000 / 959,
  },
  canada: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  argentina: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  armenia: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  austria: {
    height: 513,
    width: 1000,
    viewBox: "0 0 1000 513",
    aspectRatio: 1000 / 513,
  },
  denmark: {
    height: 810,
    width: 1000,
    viewBox: "0 0 1000 810",
    aspectRatio: 1000 / 810,
  },
  finland: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  greenland: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  iceland: {
    height: 679,
    width: 1000,
    viewBox: "0 0 1000 679",
    aspectRatio: 1000 / 679,
  },
  israel: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  kuwait: {
    height: 944,
    width: 1000,
    viewBox: "0 0 1000 944",
    aspectRatio: 1000 / 944,
  },
  lebanon: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  luxembourg: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  norway: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  oman: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  poland: {
    height: 947,
    width: 1000,
    viewBox: "0 0 1000 947",
    aspectRatio: 1000 / 947,
  },
  singapore: {
    height: 508,
    width: 1000,
    viewBox: "0 0 1000 508",
    aspectRatio: 1000 / 508,
  },
  sweden: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  uae: {
    height: 788,
    width: 1000,
    viewBox: "0 0 1000 788",
    aspectRatio: 1000 / 788,
  },
  vatican: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  albania: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  algeria: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  andorra: {
    height: 835,
    width: 1000,
    viewBox: "0 0 1000 835",
    aspectRatio: 1000 / 835,
  },
  angola: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  anguilla: {
    height: 557,
    width: 1000,
    viewBox: "0 0 1000 557",
    aspectRatio: 1000 / 557,
  },

  world: {
    height: 857,
    width: 2000,
    viewBox: "0 0 2000 857",
    aspectRatio: 2000 / 857,
  },
} as const;

/**
 * Size preset configurations
 * Defines the dimensions for each size variant
 */
export const SIZE_PRESETS = {
  xs: {
    scale: 0.25,
    description: "Extra small - 25% of original size",
  },
  sm: {
    scale: 0.5,
    description: "Small - 50% of original size",
  },
  md: {
    scale: 0.75,
    description: "Medium - 75% of original size",
  },
  lg: {
    scale: 1,
    description: "Large - 100% of original size (default)",
  },
  xl: {
    scale: 1.5,
    description: "Extra large - 150% of original size",
  },
  "2xl": {
    scale: 2,
    description: "2X Large - 200% of original size",
  },
  "3xl": {
    scale: 2.5,
    description: "3X Large - 250% of original size",
  },
  "4xl": {
    scale: 3,
    description: "4X Large - 300% of original size",
  },
} as const;

/**
 * Calculate viewport dimensions based on size variant
 * @param baseConfig - Base viewport configuration
 * @param size - Size variant or custom size
 * @returns Calculated width and height
 */
export const calculateViewportDimensions = (
  baseConfig:
    | typeof BASE_VIEWPORT_CONFIGS.afghanistan
    | typeof BASE_VIEWPORT_CONFIGS.australia
    | typeof BASE_VIEWPORT_CONFIGS.brazil
    | typeof BASE_VIEWPORT_CONFIGS.france
    | typeof BASE_VIEWPORT_CONFIGS.gb
    | typeof BASE_VIEWPORT_CONFIGS.germany
    | typeof BASE_VIEWPORT_CONFIGS.india
    | typeof BASE_VIEWPORT_CONFIGS.iran
    | typeof BASE_VIEWPORT_CONFIGS.netherlands
    | typeof BASE_VIEWPORT_CONFIGS.usa
    | typeof BASE_VIEWPORT_CONFIGS.europe
    | typeof BASE_VIEWPORT_CONFIGS.belgium
    | typeof BASE_VIEWPORT_CONFIGS.switzerland
    | typeof BASE_VIEWPORT_CONFIGS.pakistan
    | typeof BASE_VIEWPORT_CONFIGS.canada
    | typeof BASE_VIEWPORT_CONFIGS.argentina
    | typeof BASE_VIEWPORT_CONFIGS.armenia
    | typeof BASE_VIEWPORT_CONFIGS.austria
    | typeof BASE_VIEWPORT_CONFIGS.denmark
    | typeof BASE_VIEWPORT_CONFIGS.finland
    | typeof BASE_VIEWPORT_CONFIGS.greenland
    | typeof BASE_VIEWPORT_CONFIGS.iceland
    | typeof BASE_VIEWPORT_CONFIGS.israel
    | typeof BASE_VIEWPORT_CONFIGS.kuwait
    | typeof BASE_VIEWPORT_CONFIGS.lebanon
    | typeof BASE_VIEWPORT_CONFIGS.luxembourg
    | typeof BASE_VIEWPORT_CONFIGS.norway
    | typeof BASE_VIEWPORT_CONFIGS.oman
    | typeof BASE_VIEWPORT_CONFIGS.poland
    | typeof BASE_VIEWPORT_CONFIGS.singapore
    | typeof BASE_VIEWPORT_CONFIGS.sweden
    | typeof BASE_VIEWPORT_CONFIGS.uae
    | typeof BASE_VIEWPORT_CONFIGS.vatican
    | typeof BASE_VIEWPORT_CONFIGS.albania
    | typeof BASE_VIEWPORT_CONFIGS.algeria
    | typeof BASE_VIEWPORT_CONFIGS.andorra
    | typeof BASE_VIEWPORT_CONFIGS.angola
    | typeof BASE_VIEWPORT_CONFIGS.anguilla
    | typeof BASE_VIEWPORT_CONFIGS.world,
  size: MapSize = "lg",
): { width: number; height: number } => {
  // If size is a number, use it as a scale factor
  if (typeof size === "number") {
    return {
      width: baseConfig.width * size,
      height: baseConfig.height * size,
    };
  }

  // If size is a string preset, get the scale factor
  const preset = SIZE_PRESETS[size as keyof typeof SIZE_PRESETS];
  if (preset) {
    return {
      width: baseConfig.width * preset.scale,
      height: baseConfig.height * preset.scale,
    };
  }

  // Default to large (scale 1)
  return {
    width: baseConfig.width,
    height: baseConfig.height,
  };
};

/**
 * Creates a viewport configuration object for a specific map.
 *
 * This factory function generates a consistent config structure that includes:
 * - The base viewport settings from BASE_VIEWPORT_CONFIGS
 * - A getConfig method that calculates responsive dimensions based on size
 *
 * @param mapKey - The key identifying which map's base config to use
 *                 (must be a key of BASE_VIEWPORT_CONFIGS)
 * @returns An object containing:
 *   - `base`: The original viewport configuration for the map
 *   - `getConfig`: A function that accepts a MapSize and returns
 *                  height/width as strings for SVG attributes
 *
 * @example
 * const usaConfig = createMapViewportConfig('usa');
 * const dimensions = usaConfig.getConfig('xl');
 * // Returns: { height: "600", width: "900" }
 *
 * @internal This function is used to generate SVG_VIEWPORT_CONFIGS
 */
const createMapViewportConfig = (
  mapKey: keyof typeof BASE_VIEWPORT_CONFIGS,
) => {
  const base = BASE_VIEWPORT_CONFIGS[mapKey];
  return {
    base,
    getConfig: (size: MapSize = "lg") => {
      const dimensions = calculateViewportDimensions(base, size);
      return {
        height: dimensions.height.toString(),
        width: dimensions.width.toString(),
      };
    },
  } as const;
};

/**
 * Registry of viewport configurations for all supported maps.
 *
 * Each entry provides:
 * - `base`: The raw viewport configuration (viewBox, aspect ratio, etc.)
 * - `getConfig(size?)`: A method to compute responsive SVG dimensions
 *
 * @example
 * // Get dimensions for a large USA map
 * const usaDims = SVG_VIEWPORT_CONFIGS.usa.getConfig('lg');
 * // { height: "600", width: "900" }
 *
 * @example
 * // Use in SVG generation
 * const config = SVG_VIEWPORT_CONFIGS[mapType];
 * const { width, height } = config.getConfig(options.size);
 *
 * @remarks
 * - The `world` map is always included by default
 * - Optional maps (e.g., 'usa', 'afghanistan') must be registered
 *   via `registerMapData()` before use
 * - All dimensions are returned as strings for direct use in SVG attributes
 */
export const SVG_VIEWPORT_CONFIGS = {
  afghanistan: createMapViewportConfig("afghanistan"),
  australia: createMapViewportConfig("australia"),
  brazil: createMapViewportConfig("brazil"),
  france: createMapViewportConfig("france"),
  gb: createMapViewportConfig("gb"),
  germany: createMapViewportConfig("germany"),
  india: createMapViewportConfig("india"),
  iran: createMapViewportConfig("iran"),
  netherlands: createMapViewportConfig("netherlands"),
  usa: createMapViewportConfig("usa"),
  europe: createMapViewportConfig("europe"),
  belgium: createMapViewportConfig("belgium"),
  switzerland: createMapViewportConfig("switzerland"),
  pakistan: createMapViewportConfig("pakistan"),
  canada: createMapViewportConfig("canada"),
  argentina: createMapViewportConfig("argentina"),
  armenia: createMapViewportConfig("armenia"),
  austria: createMapViewportConfig("austria"),
  denmark: createMapViewportConfig("denmark"),
  finland: createMapViewportConfig("finland"),
  greenland: createMapViewportConfig("greenland"),
  iceland: createMapViewportConfig("iceland"),
  israel: createMapViewportConfig("israel"),
  kuwait: createMapViewportConfig("kuwait"),
  lebanon: createMapViewportConfig("lebanon"),
  luxembourg: createMapViewportConfig("luxembourg"),
  norway: createMapViewportConfig("norway"),
  oman: createMapViewportConfig("oman"),
  poland: createMapViewportConfig("poland"),
  singapore: createMapViewportConfig("singapore"),
  sweden: createMapViewportConfig("sweden"),
  uae: createMapViewportConfig("uae"),
  vatican: createMapViewportConfig("vatican"),
  albania: createMapViewportConfig("albania"),
  algeria: createMapViewportConfig("algeria"),
  andorra: createMapViewportConfig("andorra"),
  angola: createMapViewportConfig("angola"),
  anguilla: createMapViewportConfig("anguilla"),
  world: createMapViewportConfig("world"),
} as const;

/**
 * Default styling options for map regions
 */
export const DEFAULT_MAP_OPTIONS: Required<MapOptions> = {
  background: "#f0f0f0",
  borders: "#333333",
  hoverColor: "#d0e0ff",
  size: "lg",
  showLabels: false,
  showTooltip: true,
};
