import World from "./maps/World";
import {
    ALL_MAP_KEYS,
    type MapOptions,
    type MapSize,
    type MapType,
    type ViewportConfig,
} from "./types";

// ============================================================================
// 1. DATA REGISTRY
// ============================================================================

/**
 * The central registry for map data.
 *
 * @remarks
 * - The `'world'` map is included by default.
 * - All other maps are initialized as `undefined` to keep initial bundle sizes small.
 * - Use `registerMapData` to dynamically load optional maps when needed.
 */
export const MAP_DATA_REGISTRY: Record<MapType, any> = {
    world: World,
    ...Object.fromEntries(
        ALL_MAP_KEYS.filter((key) => key !== "world").map((key) => [key, undefined])
    ),
} as Record<MapType, any>;

/**
 * Registers a new map's data into the `MAP_DATA_REGISTRY`.
 *
 * @param type - The map identifier (must match a key in `MapType`)
 * @param data - The imported map data object
 *
 * @example
 * import { registerMapData } from 'svg-world-maps';
 * import usaData from './maps/usa';
 * registerMapData('usa', usaData);
 */
export const registerMapData = (type: MapType, data: any) => {
    (MAP_DATA_REGISTRY as any)[type] = data;
};

// ============================================================================
// 2. BASE CONFIGURATIONS
// ============================================================================

/**
 * Base viewport configurations for each map type.
 *
 * @remarks
 * This object is strictly typed against `MapType` using `satisfies`.
 * TypeScript will enforce that every map in `ALL_MAP_KEYS` has a corresponding
 * configuration here, preventing missing data or typo bugs at compile time.
 */
export const BASE_VIEWPORT_CONFIGS = {
    afghanistan: {height: 457.2, width: 600, viewBox: "0 0 600 457.2", aspectRatio: 600 / 457.2},
    australia: {height: 966, width: 1000, viewBox: "0 0 1000 966", aspectRatio: 1000 / 966},
    brazil: {height: 912, width: 1000, viewBox: "0 0 1000 912", aspectRatio: 1000 / 912},
    france: {height: 960, width: 1000, viewBox: "0 0 1000 960", aspectRatio: 1000 / 960},
    gb: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    germany: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    india: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    iran: {height: 593.71021, width: 654.51147, viewBox: "0 0 654.51147 593.71021", aspectRatio: 654.51147 / 593.71021},
    netherlands: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    usa: {height: 589, width: 1000, viewBox: "0 0 1000 589", aspectRatio: 1000 / 589},
    europe: {height: 684, width: 1000, viewBox: "0 0 1000 684", aspectRatio: 1000 / 684},
    belgium: {height: 817, width: 1000, viewBox: "0 0 1000 817", aspectRatio: 1000 / 817},
    switzerland: {height: 641, width: 1000, viewBox: "0 0 1000 641", aspectRatio: 1000 / 641},
    pakistan: {height: 959, width: 1000, viewBox: "0 0 1000 959", aspectRatio: 1000 / 959},
    canada: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    argentina: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    armenia: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    austria: {height: 513, width: 1000, viewBox: "0 0 1000 513", aspectRatio: 1000 / 513},
    denmark: {height: 810, width: 1000, viewBox: "0 0 1000 810", aspectRatio: 1000 / 810},
    finland: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    greenland: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    iceland: {height: 679, width: 1000, viewBox: "0 0 1000 679", aspectRatio: 1000 / 679},
    israel: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    kuwait: {height: 944, width: 1000, viewBox: "0 0 1000 944", aspectRatio: 1000 / 944},
    lebanon: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    luxembourg: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    norway: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    oman: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    poland: {height: 947, width: 1000, viewBox: "0 0 1000 947", aspectRatio: 1000 / 947},
    singapore: {height: 508, width: 1000, viewBox: "0 0 1000 508", aspectRatio: 1000 / 508},
    sweden: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    uae: {height: 788, width: 1000, viewBox: "0 0 1000 788", aspectRatio: 1000 / 788},
    vatican: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    albania: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    algeria: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    andorra: {height: 835, width: 1000, viewBox: "0 0 1000 835", aspectRatio: 1000 / 835},
    angola: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    anguilla: {height: 557, width: 1000, viewBox: "0 0 1000 557", aspectRatio: 1000 / 557},
    antigua_and_barbuda: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    aruba: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    azerbaijan: {height: 782, width: 1000, viewBox: "0 0 1000 782", aspectRatio: 1000 / 782},
    bahrain: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    barbados: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    belarus: {height: 871, width: 1000, viewBox: "0 0 1000 871", aspectRatio: 1000 / 871},
    belize: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    benin: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    bermuda: {height: 698, width: 1000, viewBox: "0 0 1000 698", aspectRatio: 1000 / 698},
    bhutan: {height: 522, width: 1000, viewBox: "0 0 1000 522", aspectRatio: 1000 / 522},
    bolivia: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    bosnia_and_herzegovina: {height: 970, width: 1000, viewBox: "0 0 1000 970", aspectRatio: 1000 / 970},
    botswana: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    british_virgin_islands: {height: 863, width: 1000, viewBox: "0 0 1000 863", aspectRatio: 1000 / 863},
    brunei: {height: 766, width: 1000, viewBox: "0 0 1000 766", aspectRatio: 1000 / 766},
    bulgaria: {height: 651, width: 1000, viewBox: "0 0 1000 651", aspectRatio: 1000 / 651},
    cambodia: {height: 834, width: 1000, viewBox: "0 0 1000 834", aspectRatio: 1000 / 834},
    cameroon: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    cape_verde: {height: 924, width: 1000, viewBox: "0 0 1000 924", aspectRatio: 1000 / 924},
    drc: {height: 994, width: 1000, viewBox: "0 0 1000 994", aspectRatio: 1000 / 994},
    chad: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    chile: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    china: {height: 738, width: 1000, viewBox: "0 0 1000 738", aspectRatio: 1000 / 738},
    colombia: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    croatia: {height: 981, width: 1000, viewBox: "0 0 1000 981", aspectRatio: 1000 / 981},
    cyprus: {height: 569, width: 1000, viewBox: "0 0 1000 569", aspectRatio: 1000 / 569},
    czech_republic: {height: 570, width: 1000, viewBox: "0 0 1000 570", aspectRatio: 1000 / 570},
    central_african_republic: {height: 677, width: 1000, viewBox: "0 0 1000 677", aspectRatio: 1000 / 677},
    djibouti: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    ecuador: {height: 398, width: 1000, viewBox: "0 0 1000 398", aspectRatio: 1000 / 398},
    egypt: {height: 888, width: 1000, viewBox: "0 0 1000 888", aspectRatio: 1000 / 888},
    fiji: {height: 30, width: 1000, viewBox: "0 0 1000 30", aspectRatio: 1000 / 30},
    georgia: {height: 510, width: 1000, viewBox: "0 0 1000 510", aspectRatio: 1000 / 510},
    greece: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    hungary: {height: 613, width: 1000, viewBox: "0 0 1000 613", aspectRatio: 1000 / 613},
    indonesia: {height: 368, width: 1000, viewBox: "0 0 1000 368", aspectRatio: 1000 / 368},
    iraq: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    italy: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    japan: {height: 846, width: 1000, viewBox: "0 0 1000 846", aspectRatio: 1000 / 846},
    jordan: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    kazakhstan: {height: 549, width: 1000, viewBox: "0 0 1000 549", aspectRatio: 1000 / 549},
    kyrgyzstan: {height: 492, width: 1000, viewBox: "0 0 1000 492", aspectRatio: 1000 / 492},
    laos: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    libya: {height: 972, width: 1000, viewBox: "0 0 1000 972", aspectRatio: 1000 / 972},
    macedonia: {height: 793, width: 1000, viewBox: "0 0 1000 793", aspectRatio: 1000 / 793},
    malaysia: {height: 332, width: 1000, viewBox: "0 0 1000 332", aspectRatio: 1000 / 332},
    mali: {height: 949, width: 1000, viewBox: "0 0 1000 949", aspectRatio: 1000 / 949},
    mauritania: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    mexico: {height: 630, width: 1000, viewBox: "0 0 1000 630", aspectRatio: 1000 / 630},
    monaco: {height: 879, width: 1000, viewBox: "0 0 1000 879", aspectRatio: 1000 / 879},
    mongolia: {height: 481, width: 1000, viewBox: "0 0 1000 481", aspectRatio: 1000 / 481},
    montenegro: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    myanmar: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    namibia: {height: 966, width: 1000, viewBox: "0 0 1000 966", aspectRatio: 1000 / 966},
    new_zealand: {height: 1330, width: 1000, viewBox: "0 0 1000 1330", aspectRatio: 1000 / 1330},
    nicaragua: {height: 893, width: 1000, viewBox: "0 0 1000 893", aspectRatio: 1000 / 893},
    nigeria: {height: 812, width: 1000, viewBox: "0 0 1000 812", aspectRatio: 1000 / 812},
    north_korea: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    panama: {height: 421, width: 1000, viewBox: "0 0 1000 421", aspectRatio: 1000 / 421},
    paraguay: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    peru: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    philippines: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    portugal: {height: 601, width: 1000, viewBox: "0 0 1000 601", aspectRatio: 1000 / 601},
    romania: {height: 704, width: 1000, viewBox: "0 0 1000 704", aspectRatio: 1000 / 704},
    russia: {height: 760, width: 1000, viewBox: "0 0 1000 760", aspectRatio: 1000 / 760},
    saudi_arabia: {height: 824, width: 1000, viewBox: "0 0 1000 824", aspectRatio: 1000 / 824},
    senegal: {height: 736, width: 1000, viewBox: "0 0 1000 736", aspectRatio: 1000 / 736},
    serbia: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    slovakia: {height: 492, width: 1000, viewBox: "0 0 1000 492", aspectRatio: 1000 / 492},
    slovenia: {height: 660, width: 1000, viewBox: "0 0 1000 660", aspectRatio: 1000 / 660},
    south_africa: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    south_korea: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    south_sudan: {height: 762, width: 1000, viewBox: "0 0 1000 762", aspectRatio: 1000 / 762},
    spain: {height: 890, width: 1000, viewBox: "0 0 1000 890", aspectRatio: 1000 / 890},
    sudan: {height: 900, width: 1000, viewBox: "0 0 1000 900", aspectRatio: 1000 / 900},
    syria: {height: 918, width: 1000, viewBox: "0 0 1000 918", aspectRatio: 1000 / 918},
    tajikistan: {height: 719, width: 1000, viewBox: "0 0 1000 719", aspectRatio: 1000 / 719},
    thailand: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    turkey: {height: 422, width: 1000, viewBox: "0 0 1000 422", aspectRatio: 1000 / 422},
    turkmenistan: {height: 692, width: 1000, viewBox: "0 0 1000 692", aspectRatio: 1000 / 692},
    ukraine: {height: 669, width: 1000, viewBox: "0 0 1000 669", aspectRatio: 1000 / 669},
    uruguay: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    uzbekistan: {height: 652, width: 1000, viewBox: "0 0 1000 652", aspectRatio: 1000 / 652},
    vietnam: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    bangladesh: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    ethiopia: {height: 774, width: 1000, viewBox: "0 0 1000 774", aspectRatio: 1000 / 774},
    morocco: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    taiwan: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    tunisia: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    zimbabwe: {height: 918, width: 1000, viewBox: "0 0 1000 918", aspectRatio: 1000 / 918},
    madagascar: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    ghana: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    yemen: {height: 563, width: 1000, viewBox: "0 0 1000 563", aspectRatio: 1000 / 563},
    honduras: {height: 738, width: 1000, viewBox: "0 0 1000 738", aspectRatio: 1000 / 738},
    niger: {height: 786, width: 1000, viewBox: "0 0 1000 786", aspectRatio: 1000 / 786},
    venezuela: {height: 877, width: 1000, viewBox: "0 0 1000 877", aspectRatio: 1000 / 877},
    nepal: {height: 569, width: 1000, viewBox: "0 0 1000 569", aspectRatio: 1000 / 569},
    togo: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    liberia: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    ireland: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    palestine: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    eritrea: {height: 875, width: 1000, viewBox: "0 0 1000 875", aspectRatio: 1000 / 875},
    lithuania: {height: 763, width: 1000, viewBox: "0 0 1000 763", aspectRatio: 1000 / 763},
    qatar: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    malawi: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    jamaica: {height: 395, width: 1000, viewBox: "0 0 1000 395", aspectRatio: 1000 / 395},
    somalia: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    uganda: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    kenya: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    tanzania: {height: 998, width: 1000, viewBox: "0 0 1000 998", aspectRatio: 1000 / 998},
    mozambique: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    moldova: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    gabon: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    lesotho: {height: 987, width: 1000, viewBox: "0 0 1000 987", aspectRatio: 1000 / 987},
    latvia: {height: 605, width: 1000, viewBox: "0 0 1000 605", aspectRatio: 1000 / 605},
    swaziland: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    comoros: {height: 791, width: 1000, viewBox: "0 0 1000 791", aspectRatio: 1000 / 791},
    guyana: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    mauritius: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    estonia: {height: 690, width: 1000, viewBox: "0 0 1000 690", aspectRatio: 1000 / 690},
    suriname: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    malta: {height: 884, width: 1000, viewBox: "0 0 1000 884", aspectRatio: 1000 / 884},
    maldives: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    bahamas: {height: 898, width: 1000, viewBox: "0 0 1000 898", aspectRatio: 1000 / 898},
    vanuatu: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    zambia: {height: 860, width: 1000, viewBox: "0 0 1000 860", aspectRatio: 1000 / 860},
    guatemala: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    guinea: {height: 751, width: 1000, viewBox: "0 0 1000 751", aspectRatio: 1000 / 751},
    rwanda: {height: 873, width: 1000, viewBox: "0 0 1000 873", aspectRatio: 1000 / 873},
    haiti: {height: 766, width: 1000, viewBox: "0 0 1000 766", aspectRatio: 1000 / 766},
    burundi: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    cuba: {height: 342, width: 1000, viewBox: "0 0 1000 342", aspectRatio: 1000 / 342},
    grenada: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    seychelles: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    tonga: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    dominica: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    nauru: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    montserrat: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    liechtenstein: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    timorleste: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    hong_kong: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    western_sahara: {height: 898, width: 1000, viewBox: "0 0 1000 898", aspectRatio: 1000 / 898},
    cte_d_ivoire: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    burkina_faso: {height: 736, width: 1000, viewBox: "0 0 1000 736", aspectRatio: 1000 / 736},
    sri_lanka: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    dominican_republic: {height: 686, width: 1000, viewBox: "0 0 1000 686", aspectRatio: 1000 / 686},
    falkland_islands: {height: 621, width: 1000, viewBox: "0 0 1000 621", aspectRatio: 1000 / 621},
    pitcairn_islands: {height: 212, width: 1000, viewBox: "0 0 1000 212", aspectRatio: 1000 / 212},
    saint_martin_french: {height: 686, width: 1000, viewBox: "0 0 1000 686", aspectRatio: 1000 / 686},
    saint_martin_dutch: {height: 446, width: 1000, viewBox: "0 0 1000 446", aspectRatio: 1000 / 446},
    saint_kitts_and_nevis: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    puerto_rico: {height: 234, width: 1000, viewBox: "0 0 1000 234", aspectRatio: 1000 / 234},
    costa_rica: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    the_gambia: {height: 258, width: 1000, viewBox: "0 0 1000 258", aspectRatio: 1000 / 258},
    cayman_islands: {height: 310, width: 1000, viewBox: "0 0 1000 310", aspectRatio: 1000 / 310},
    faeroe_islands: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    turks_and_caicos_islands: {height: 532, width: 1000, viewBox: "0 0 1000 532", aspectRatio: 1000 / 532},
    saint_vincent_and_the_grenadines: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    united_states_virgin_islands: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    curaco: {height: 829, width: 1000, viewBox: "0 0 1000 829", aspectRatio: 1000 / 829},
    saint_lucia: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    sao_tome_and_principe: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    french_polynesia: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    new_caledonia: {height: 722, width: 1000, viewBox: "0 0 1000 722", aspectRatio: 1000 / 722},
    solomon_islands: {height: 433, width: 1000, viewBox: "0 0 1000 433", aspectRatio: 1000 / 433},
    sierra_leone: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    papua_new_guinea: {height: 589, width: 1000, viewBox: "0 0 1000 589", aspectRatio: 1000 / 589},
    el_salvador: {height: 547, width: 1000, viewBox: "0 0 1000 547", aspectRatio: 1000 / 547},
    republic_of_congo: {height: 1000, width: 1000, viewBox: "0 0 1000 1000", aspectRatio: 1000 / 1000},
    guineabissau: {height: 583, width: 1000, viewBox: "0 0 1000 583", aspectRatio: 1000 / 583},
    equatorial_guinea: {height: 917, width: 1000, viewBox: "0 0 1000 917", aspectRatio: 1000 / 917},
    trinidad_and_tobago: {height: 932, width: 1000, viewBox: "0 0 1000 932", aspectRatio: 1000 / 932},
    world: {height: 857, width: 2000, viewBox: "0 0 2000 857", aspectRatio: 2000 / 857},
} as const satisfies Record<MapType, ViewportConfig>;

/**
 * Predefined scaling factors for map rendering.
 * Ranges from 25% ('xs') to 300% ('4xl') of the original dimensions.
 */
export const SIZE_PRESETS = {
    xs: {scale: 0.25, description: "Extra small - 25% of original size"},
    sm: {scale: 0.5, description: "Small - 50% of original size"},
    md: {scale: 0.75, description: "Medium - 75% of original size"},
    lg: {scale: 1, description: "Large - 100% of original size (default)"},
    xl: {scale: 1.5, description: "Extra large - 150% of original size"},
    "2xl": {scale: 2, description: "2X Large - 200% of original size"},
    "3xl": {scale: 2.5, description: "3X Large - 250% of original size"},
    "4xl": {scale: 3, description: "4X Large - 300% of original size"},
} as const;

// ============================================================================
// 3. HELPER FUNCTIONS
// ============================================================================

/**
 * Calculates the final width and height of a map based on its base configuration
 * and a target size (either a preset string or a custom numeric scale).
 *
 * @param baseConfig - The base viewport configuration for the map
 * @param size - The target size preset or custom numeric scale factor
 * @returns An object containing the calculated `width` and `height`
 */
export const calculateViewportDimensions = (
    baseConfig: ViewportConfig,
    size: MapSize = "lg",
): { width: number; height: number } => {
    if (typeof size === "number") {
        return {
            width: baseConfig.width * size,
            height: baseConfig.height * size,
        };
    }

    const preset = SIZE_PRESETS[size as keyof typeof SIZE_PRESETS];
    if (preset) {
        return {
            width: baseConfig.width * preset.scale,
            height: baseConfig.height * preset.scale,
        };
    }

    // Fallback to default large (scale 1)
    return {
        width: baseConfig.width,
        height: baseConfig.height,
    };
};

/**
 * Factory function that generates a consistent viewport configuration object for a specific map.
 *
 * @param mapKey - The key identifying which map's base config to use
 * @returns An object containing the `base` config and a `getConfig` helper method
 *
 * @internal This function is primarily used to generate `SVG_VIEWPORT_CONFIGS`.
 */
const createMapViewportConfig = (mapKey: MapType) => {
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

// ============================================================================
// 4. DERIVED REGISTRIES & DEFAULTS
// ============================================================================

/**
 * A derived registry of viewport configurations for all supported maps.
 *
 * @remarks
 * Each entry provides:
 * - `base`: The raw viewport configuration (viewBox, aspect ratio, etc.)
 * - `getConfig(size?)`: A method to compute responsive SVG dimension strings
 *
 * @example
 * // Get dimensions for a large USA map
 * const usaDims = SVG_VIEWPORT_CONFIGS.usa.getConfig('lg');
 * // Returns: { height: "589", width: "1000" }
 */
export const SVG_VIEWPORT_CONFIGS = Object.fromEntries(
    ALL_MAP_KEYS.map((key) => [key, createMapViewportConfig(key)])
) as Record<MapType, ReturnType<typeof createMapViewportConfig>>;

/**
 * Default styling and behavioral options applied to all maps unless overridden.
 */
export const DEFAULT_MAP_OPTIONS: Required<MapOptions> = {
    background: "#f0f0f0",
    borders: "#333333",
    hoverColor: "#d0e0ff",
    size: "lg",
    showLabels: false,
    showTooltip: true,
};