
/**
 * The single source of truth for all supported map identifiers.
 *
 * @remarks
 * Add or remove a map key here, and the `MapType` union will automatically update.
 * This eliminates the need to manually maintain duplicate lists across the codebase.
 */
export const ALL_MAP_KEYS = [
  "world", "afghanistan", "australia", "brazil", "france", "gb", "germany", "india", "iran", "netherlands", "usa", "europe", "belgium", "switzerland", "pakistan", "canada", "argentina", "armenia", "austria", "denmark", "finland", "greenland", "iceland", "israel", "kuwait", "lebanon", "luxembourg", "norway", "oman", "poland", "singapore", "sweden", "uae", "vatican", "albania", "algeria", "andorra", "angola", "anguilla", "antigua_and_barbuda", "aruba", "azerbaijan", "bahrain", "barbados", "belarus", "belize", "benin", "bermuda", "bhutan", "bolivia", "bosnia_and_herzegovina", "botswana", "british_virgin_islands", "brunei", "bulgaria", "cambodia", "cameroon", "cape_verde", "drc", "chad", "chile", "china", "colombia", "croatia", "cyprus", "czech_republic", "central_african_republic", "djibouti", "ecuador", "egypt", "fiji", "georgia", "greece", "hungary", "indonesia", "iraq", "italy", "japan", "jordan", "kazakhstan", "kyrgyzstan", "laos", "libya", "macedonia", "malaysia", "mali", "mauritania", "mexico", "monaco", "mongolia", "montenegro", "myanmar", "namibia", "new_zealand", "nicaragua", "nigeria", "north_korea", "panama", "paraguay", "peru", "philippines", "portugal", "romania", "russia", "saudi_arabia", "senegal", "serbia", "slovakia", "slovenia", "south_africa", "south_korea", "south_sudan", "spain", "sudan", "syria", "tajikistan", "thailand", "turkey", "turkmenistan", "ukraine", "uruguay", "uzbekistan", "vietnam", "bangladesh", "ethiopia", "morocco", "taiwan", "tunisia", "zimbabwe", "madagascar", "ghana", "yemen", "honduras", "niger", "venezuela", "nepal", "togo", "liberia", "ireland", "palestine", "eritrea", "lithuania", "qatar", "malawi", "jamaica", "somalia", "uganda", "kenya", "tanzania", "mozambique", "moldova", "gabon", "lesotho", "latvia", "swaziland", "comoros", "guyana", "mauritius", "estonia", "suriname", "malta", "maldives", "bahamas", "vanuatu", "zambia", "guatemala", "guinea", "rwanda", "haiti", "burundi", "cuba", "grenada", "seychelles", "tonga", "dominica", "nauru", "montserrat", "liechtenstein", "timorleste", "hong_kong", "western_sahara", "cte_d_ivoire", "burkina_faso", "sri_lanka", "dominican_republic", "falkland_islands", "pitcairn_islands", "saint_martin_french", "saint_martin_dutch", "saint_kitts_and_nevis", "puerto_rico", "costa_rica", "the_gambia", "cayman_islands", "faeroe_islands", "turks_and_caicos_islands", "saint_vincent_and_the_grenadines", "united_states_virgin_islands", "curaco", "saint_lucia", "sao_tome_and_principe", "french_polynesia", "new_caledonia", "solomon_islands", "sierra_leone", "papua_new_guinea", "el_salvador", "republic_of_congo", "guineabissau", "equatorial_guinea", "trinidad_and_tobago"
] as const;

/**
 * Visual style for capital markers.
 *
 * @remarks
 * Every field is optional. When omitted, the value falls back to
 * `DEFAULT_CAPITALS_STYLE`, so `capitals: {}` renders with full defaults.
 */
export interface CapitalsConfig {
  /**
   * Fill color of the capital marker.
   * Accepts any valid CSS color (named, hex, `rgb()`, `hsl()`).
   * @default "#2563eb"
   */
  color?: string;
}

/**
 * Public option for the capitals feature.
 *
 * - `false` / omitted → no capitals rendered
 * - `true`            → render with default style
 * - `CapitalsConfig`  → render with overrides
 */
export type CapitalsOption = boolean | CapitalsConfig;

/**
 * Represents a single capital-city marker rendered on top of a map.
 *
 * @remarks
 * Coordinates (`x`, `y`) must be expressed in the **same `viewBox` coordinate
 * space** as the parent map's `states` / `labels`. They are **not** latitude /
 * longitude — SVG has no projection, so the renderer plots the raw numbers.
 *
 * A map can contain more than one capital (e.g. South Africa has three,
 * Bolivia has two), which is why `MapData.capitals` is always an array.
 *
 * @example
 * const tehran: Capital = { name: "Tehran", code: "IR", x: 380.42, y: 210.77 };
 */
export interface Capital {
  /** Display name of the capital (e.g. "London"). */
  name: string;

  /** X coordinate within the map's `viewBox`. */
  x: number;

  /** Y coordinate within the map's `viewBox`. */
  y: number;

  /**
   * Optional ISO code of the owning state / country
   * (e.g. `"IR"`, `"US-DC"`). Surfaced on the rendered `<g>` as
   * `data-code` for click-handling.
   */
  code?: string;
}

/**
 * A union type of all supported map identifiers.
 * @remarks Automatically derived from `ALL_MAP_KEYS`. Do not modify this manually.
 */
export type MapType = typeof ALL_MAP_KEYS[number];

/**
 * Base configuration defining the original/optimal dimensions for a specific map's SVG viewport.
 */
export type ViewportConfig = {
  height: number;
  width: number;
  viewBox: string;
  aspectRatio: number;
};

/**
 * Configuration options for map styling and sizing.
 */
export type MapOptions = {
  /** Background color for map states (supports any valid CSS color). @default "#f0f0f0" */
  background?: string;

  /** Border color for state boundaries (supports any valid CSS color). @default "#333333" */
  borders?: string;

  /**
   * Controls the rendered size of the map.
   *
   * You can specify size in two ways:
   * 1. **Preset sizes**: `'xs'` (0.25x), `'sm'` (0.5x), `'md'` (0.75x), `'lg'` (1x, default), `'xl'` (1.5x), `'2xl'` (2x), `'3xl'` (2.5x), `'4xl'` (3x)
   * 2. **Custom scale factor**: Any number (e.g., `0.33` for one-third size, `1.25` for 25% larger)
   *
   * @default "lg"
   * @example { size: 'sm' } // 50% of original dimensions
   * @example { size: 1.25 } // 25% larger than original
   */
  size?: MapSize;

  /**
   * Color applied to map states when hovered by the user.
   * Supports any valid CSS color format (named, hex, rgb, hsl).
   * @remarks Requires CSS/JS hover handling to be implemented in your renderer.
   * @default "#d0e0ff"
   */
  hoverColor?: string;

  /**
   * Whether to show static text labels permanently on the map.
   * @default false
   */
  showLabels?: boolean;

  /**
   * Whether to show a tooltip popup when hovering over a state.
   * Uses the native SVG `<title>` element for maximum compatibility.
   * @default true
   */
  showTooltip?: boolean;

  /**
   * Renders capital-city markers on the map.
   *
   * @remarks
   * Only maps whose data ships a `capitals` array will render markers.
   * Enabling this on a map without capital data is a safe no-op.
   *
   * @default false
   * @example { capitals: true }
   * @example { capitals: { color: "#e11d48" } }
   */
  capitals?: CapitalsOption;
};

/**
 * Represents the possible size values for map rendering.
 *
 * Can be a predefined string preset (`'xs'` through `'4xl'`) or a custom numeric scale factor.
 * - A value of `1` = original size (100%)
 * - Values `< 1` = smaller (e.g., `0.5` = half size)
 * - Values `> 1` = larger (e.g., `2` = double size)
 */
export type MapSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | number;

/**
 * Represents a single SVG path within a state.
 */
export type PathData = {
  /** The SVG path data string (e.g., "M10 10 H 90 V 90 H 10 Z") */
  d: string;
};

/**
 * Represents a geographic state (or country in world maps) within a map.
 *
 * @remarks Uses a discriminated union to ensure a state has either a single `path`
 * OR multiple `paths` (for islands/territories), but never both.
 */
export type MapState = {
  /** Unique identifier code for the state (e.g., 'AF' for Afghanistan) */
  code: string;
  /** Display name of the state (e.g., 'Afghanistan') */
  name: string;
} & (
    | {
  /** Single SVG path for simple states */
  path: string;
  paths?: never;
}
    | {
  /** Multiple SVG paths for complex states (islands, territories, etc.) */
  paths: PathData[];
  path?: never;
}
    );

/**
 * Structure of raw map data containing geographic and labeling information.
 */
export type MapData = {
  /** SVG viewBox attribute value (e.g., "0 0 1000 1000") */
  viewBox: string;

  /** States/provinces for country maps (e.g., USA, India) */
  states?: MapState[];

  /** Countries for world maps (treated as states for uniformity) */
  countries?: MapState[];

  /** Optional static label coordinates and text */
  labels?: Array<{
    code: string;
    x: string | number;
    y: string | number;
    name: string;
  }>;

  /**
   * Optional list of capital-city markers to render on the map.
   *
   * @remarks
   * Only drawn when `MapOptions.capitals` is `true`. Coordinates must match
   * the map's `viewBox`; see {@link Capital} for details.
   *
   * @example
   * capitals: [
   *   { name: "Tehran", code: "IR", x: 380.42, y: 210.77 },
   * ]
   */
  capitals?: Capital[];};