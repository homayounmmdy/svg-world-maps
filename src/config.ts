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
  antigua_and_barbuda: undefined,
  aruba: undefined,
  azerbaijan: undefined,
  bahrain: undefined,
  barbados: undefined,
  belarus: undefined,
  belize: undefined,
  benin: undefined,
  bermuda: undefined,
  bhutan: undefined,
  bolivia: undefined,
  bosnia_and_herzegovina: undefined,
  botswana: undefined,
  british_virgin_islands: undefined,
  brunei: undefined,
  bulgaria: undefined,
  cambodia: undefined,
  cameroon: undefined,
  cape_verde: undefined,
  drc: undefined,
  chad: undefined,
  chile: undefined,
  china: undefined,
  colombia: undefined,
  croatia: undefined,
  cyprus: undefined,
  czech_republic: undefined,
  central_african_republic: undefined,
  djibouti: undefined,
  ecuador: undefined,
  egypt: undefined,
  fiji: undefined,
  georgia: undefined,
  greece: undefined,
  hungary: undefined,
  indonesia: undefined,
  iraq: undefined,
  italy: undefined,
  japan: undefined,
  jordan: undefined,
  kazakhstan: undefined,
  kyrgyzstan: undefined,
  laos: undefined,
  libya: undefined,
  macedonia: undefined,
  malaysia: undefined,
  mali: undefined,
  mauritania: undefined,
  mexico: undefined,
  monaco: undefined,
  mongolia: undefined,
  montenegro: undefined,
  myanmar: undefined,
  namibia: undefined,
  new_zealand: undefined,
  nicaragua: undefined,
  nigeria: undefined,
  north_korea: undefined,
  panama: undefined,
  paraguay: undefined,
  peru: undefined,
  philippines: undefined,
  portugal: undefined,
  romania: undefined,
  russia: undefined,
  saudi_arabia: undefined,
  senegal: undefined,
  serbia: undefined,
  slovakia: undefined,
  slovenia: undefined,
  south_africa: undefined,
  south_korea: undefined,
  south_sudan: undefined,
  spain: undefined,
  sudan: undefined,
  syria: undefined,
  tajikistan: undefined,
  thailand: undefined,
  turkey: undefined,
  turkmenistan: undefined,
  ukraine: undefined,
  uruguay: undefined,
  uzbekistan: undefined,
  vietnam: undefined,
  bangladesh: undefined,
  ethiopia: undefined,
  morocco: undefined,
  taiwan: undefined,
  tunisia: undefined,
  zimbabwe: undefined,
  madagascar: undefined,
  ghana: undefined,
  yemen: undefined,
  honduras: undefined,
  niger: undefined,
  venezuela: undefined,
  nepal: undefined,
  togo: undefined,
  liberia: undefined,
  ireland: undefined,
  palestine: undefined,
  eritrea: undefined,
  lithuania: undefined,
  qatar: undefined,
  malawi: undefined,
  jamaica: undefined,
  somalia: undefined,
  uganda: undefined,
  kenya: undefined,
  tanzania: undefined,
  mozambique: undefined,
  moldova: undefined,
  gabon: undefined,
  lesotho: undefined,
  latvia: undefined,
  swaziland: undefined,
  comoros: undefined,
  guyana: undefined,
  mauritius: undefined,
  estonia: undefined,
  suriname: undefined,
  malta: undefined,
  maldives: undefined,
  bahamas: undefined,
  vanuatu: undefined,
  zambia: undefined,
  guatemala: undefined,
  guinea: undefined,
  rwanda: undefined,
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
  antigua_and_barbuda: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  aruba: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  azerbaijan: {
    height: 782,
    width: 1000,
    viewBox: "0 0 1000 782",
    aspectRatio: 1000 / 782,
  },
  bahrain: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  barbados: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  belarus: {
    height: 871,
    width: 1000,
    viewBox: "0 0 1000 871",
    aspectRatio: 1000 / 871,
  },
  belize: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  benin: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  bermuda: {
    height: 698,
    width: 1000,
    viewBox: "0 0 1000 698",
    aspectRatio: 1000 / 698,
  },
  bhutan: {
    height: 522,
    width: 1000,
    viewBox: "0 0 1000 522",
    aspectRatio: 1000 / 522,
  },
  bolivia: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  bosnia_and_herzegovina: {
    height: 970,
    width: 1000,
    viewBox: "0 0 1000 970",
    aspectRatio: 1000 / 970,
  },
  botswana: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  british_virgin_islands: {
    height: 863,
    width: 1000,
    viewBox: "0 0 1000 863",
    aspectRatio: 1000 / 863,
  },
  brunei: {
    height: 766,
    width: 1000,
    viewBox: "0 0 1000 766",
    aspectRatio: 1000 / 766,
  },
  bulgaria: {
    height: 651,
    width: 1000,
    viewBox: "0 0 1000 651",
    aspectRatio: 1000 / 651,
  },
  cambodia: {
    height: 834,
    width: 1000,
    viewBox: "0 0 1000 834",
    aspectRatio: 1000 / 834,
  },
  cameroon: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  cape_verde: {
    height: 924,
    width: 1000,
    viewBox: "0 0 1000 924",
    aspectRatio: 1000 / 924,
  },
  drc: {
    height: 994,
    width: 1000,
    viewBox: "0 0 1000 994",
    aspectRatio: 1000 / 994,
  },
  chad: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  chile: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  china: {
    height: 738,
    width: 1000,
    viewBox: "0 0 1000 738",
    aspectRatio: 1000 / 738,
  },
  colombia: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  croatia: {
    height: 981,
    width: 1000,
    viewBox: "0 0 1000 981",
    aspectRatio: 1000 / 981,
  },
  cyprus: {
    height: 569,
    width: 1000,
    viewBox: "0 0 1000 569",
    aspectRatio: 1000 / 569,
  },
  czech_republic: {
    height: 570,
    width: 1000,
    viewBox: "0 0 1000 570",
    aspectRatio: 1000 / 570,
  },
  central_african_republic: {
    height: 677,
    width: 1000,
    viewBox: "0 0 1000 677",
    aspectRatio: 1000 / 677,
  },
  djibouti: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  ecuador: {
    height: 398,
    width: 1000,
    viewBox: "0 0 1000 398",
    aspectRatio: 1000 / 398,
  },
  egypt: {
    height: 888,
    width: 1000,
    viewBox: "0 0 1000 888",
    aspectRatio: 1000 / 888,
  },
  fiji: {
    height: 30,
    width: 1000,
    viewBox: "0 0 1000 30",
    aspectRatio: 1000 / 30,
  },
  georgia: {
    height: 510,
    width: 1000,
    viewBox: "0 0 1000 510",
    aspectRatio: 1000 / 510,
  },
  greece: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  hungary: {
    height: 613,
    width: 1000,
    viewBox: "0 0 1000 613",
    aspectRatio: 1000 / 613,
  },
  indonesia: {
    height: 368,
    width: 1000,
    viewBox: "0 0 1000 368",
    aspectRatio: 1000 / 368,
  },
  iraq: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  italy: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  japan: {
    height: 846,
    width: 1000,
    viewBox: "0 0 1000 846",
    aspectRatio: 1000 / 846,
  },
  jordan: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  kazakhstan: {
    height: 549,
    width: 1000,
    viewBox: "0 0 1000 549",
    aspectRatio: 1000 / 549,
  },
  kyrgyzstan: {
    height: 492,
    width: 1000,
    viewBox: "0 0 1000 492",
    aspectRatio: 1000 / 492,
  },
  laos: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  libya: {
    height: 972,
    width: 1000,
    viewBox: "0 0 1000 972",
    aspectRatio: 1000 / 972,
  },
  macedonia: {
    height: 793,
    width: 1000,
    viewBox: "0 0 1000 793",
    aspectRatio: 1000 / 793,
  },
  malaysia: {
    height: 332,
    width: 1000,
    viewBox: "0 0 1000 332",
    aspectRatio: 1000 / 332,
  },
  mali: {
    height: 949,
    width: 1000,
    viewBox: "0 0 1000 949",
    aspectRatio: 1000 / 949,
  },
  mauritania: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  mexico: {
    height: 630,
    width: 1000,
    viewBox: "0 0 1000 630",
    aspectRatio: 1000 / 630,
  },
  monaco: {
    height: 879,
    width: 1000,
    viewBox: "0 0 1000 879",
    aspectRatio: 1000 / 879,
  },
  mongolia: {
    height: 481,
    width: 1000,
    viewBox: "0 0 1000 481",
    aspectRatio: 1000 / 481,
  },
  montenegro: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  myanmar: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  namibia: {
    height: 966,
    width: 1000,
    viewBox: "0 0 1000 966",
    aspectRatio: 1000 / 966,
  },
  new_zealand: {
    height: 1330,
    width: 1000,
    viewBox: "0 0 1000 1330",
    aspectRatio: 1000 / 1330,
  },
  nicaragua: {
    height: 893,
    width: 1000,
    viewBox: "0 0 1000 893",
    aspectRatio: 1000 / 893,
  },
  nigeria: {
    height: 812,
    width: 1000,
    viewBox: "0 0 1000 812",
    aspectRatio: 1000 / 812,
  },
  north_korea: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  panama: {
    height: 421,
    width: 1000,
    viewBox: "0 0 1000 421",
    aspectRatio: 1000 / 421,
  },
  paraguay: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  peru: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  philippines: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  portugal: {
    height: 601,
    width: 1000,
    viewBox: "0 0 1000 601",
    aspectRatio: 1000 / 601,
  },
  romania: {
    height: 704,
    width: 1000,
    viewBox: "0 0 1000 704",
    aspectRatio: 1000 / 704,
  },
  russia: {
    height: 760,
    width: 1000,
    viewBox: "0 0 1000 760",
    aspectRatio: 1000 / 760,
  },
  saudi_arabia: {
    height: 824,
    width: 1000,
    viewBox: "0 0 1000 824",
    aspectRatio: 1000 / 824,
  },
  senegal: {
    height: 736,
    width: 1000,
    viewBox: "0 0 1000 736",
    aspectRatio: 1000 / 736,
  },
  serbia: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  slovakia: {
    height: 492,
    width: 1000,
    viewBox: "0 0 1000 492",
    aspectRatio: 1000 / 492,
  },
  slovenia: {
    height: 660,
    width: 1000,
    viewBox: "0 0 1000 660",
    aspectRatio: 1000 / 660,
  },
  south_africa: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  south_korea: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  south_sudan: {
    height: 762,
    width: 1000,
    viewBox: "0 0 1000 762",
    aspectRatio: 1000 / 762,
  },
  spain: {
    height: 890,
    width: 1000,
    viewBox: "0 0 1000 890",
    aspectRatio: 1000 / 890,
  },
  sudan: {
    height: 900,
    width: 1000,
    viewBox: "0 0 1000 900",
    aspectRatio: 1000 / 900,
  },
  syria: {
    height: 918,
    width: 1000,
    viewBox: "0 0 1000 918",
    aspectRatio: 1000 / 918,
  },
  tajikistan: {
    height: 719,
    width: 1000,
    viewBox: "0 0 1000 719",
    aspectRatio: 1000 / 719,
  },
  thailand: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  turkey: {
    height: 422,
    width: 1000,
    viewBox: "0 0 1000 422",
    aspectRatio: 1000 / 422,
  },
  turkmenistan: {
    height: 692,
    width: 1000,
    viewBox: "0 0 1000 692",
    aspectRatio: 1000 / 692,
  },
  ukraine: {
    height: 669,
    width: 1000,
    viewBox: "0 0 1000 669",
    aspectRatio: 1000 / 669,
  },
  uruguay: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  uzbekistan: {
    height: 652,
    width: 1000,
    viewBox: "0 0 1000 652",
    aspectRatio: 1000 / 652,
  },
  vietnam: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  bangladesh: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  ethiopia: {
    height: 774,
    width: 1000,
    viewBox: "0 0 1000 774",
    aspectRatio: 1000 / 774,
  },
  morocco: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  taiwan: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  tunisia: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  zimbabwe: {
    height: 918,
    width: 1000,
    viewBox: "0 0 1000 918",
    aspectRatio: 1000 / 918,
  },
  madagascar: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  ghana: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  yemen: {
    height: 563,
    width: 1000,
    viewBox: "0 0 1000 563",
    aspectRatio: 1000 / 563,
  },
  honduras: {
    height: 738,
    width: 1000,
    viewBox: "0 0 1000 738",
    aspectRatio: 1000 / 738,
  },
  niger: {
    height: 786,
    width: 1000,
    viewBox: "0 0 1000 786",
    aspectRatio: 1000 / 786,
  },
  venezuela: {
    height: 877,
    width: 1000,
    viewBox: "0 0 1000 877",
    aspectRatio: 1000 / 877,
  },
  nepal: {
    height: 569,
    width: 1000,
    viewBox: "0 0 1000 569",
    aspectRatio: 1000 / 569,
  },
  togo: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  liberia: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  ireland: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  palestine: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  eritrea: {
    height: 875,
    width: 1000,
    viewBox: "0 0 1000 875",
    aspectRatio: 1000 / 875,
  },
  lithuania: {
    height: 763,
    width: 1000,
    viewBox: "0 0 1000 763",
    aspectRatio: 1000 / 763,
  },
  qatar: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  malawi: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  jamaica: {
    height: 395,
    width: 1000,
    viewBox: "0 0 1000 395",
    aspectRatio: 1000 / 395,
  },
  somalia: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  uganda: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  kenya: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  tanzania: {
    height: 998,
    width: 1000,
    viewBox: "0 0 1000 998",
    aspectRatio: 1000 / 998,
  },
  mozambique: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  moldova: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  gabon: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  lesotho: {
    height: 987,
    width: 1000,
    viewBox: "0 0 1000 987",
    aspectRatio: 1000 / 987,
  },
  latvia: {
    height: 605,
    width: 1000,
    viewBox: "0 0 1000 605",
    aspectRatio: 1000 / 605,
  },
  swaziland: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  comoros: {
    height: 791,
    width: 1000,
    viewBox: "0 0 1000 791",
    aspectRatio: 1000 / 791,
  },
  guyana: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  mauritius: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  estonia: {
    height: 690,
    width: 1000,
    viewBox: "0 0 1000 690",
    aspectRatio: 1000 / 690,
  },
  suriname: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  malta: {
    height: 884,
    width: 1000,
    viewBox: "0 0 1000 884",
    aspectRatio: 1000 / 884,
  },
  maldives: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  bahamas: {
    height: 898,
    width: 1000,
    viewBox: "0 0 1000 898",
    aspectRatio: 1000 / 898,
  },
  vanuatu: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  zambia: {
    height: 860,
    width: 1000,
    viewBox: "0 0 1000 860",
    aspectRatio: 1000 / 860,
  },
  guatemala: {
    height: 1000,
    width: 1000,
    viewBox: "0 0 1000 1000",
    aspectRatio: 1000 / 1000,
  },
  guinea: {
    height: 751,
    width: 1000,
    viewBox: "0 0 1000 751",
    aspectRatio: 1000 / 751,
  },
  rwanda: {
    height: 873,
    width: 1000,
    viewBox: "0 0 1000 873",
    aspectRatio: 1000 / 873,
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
    | typeof BASE_VIEWPORT_CONFIGS.antigua_and_barbuda
    | typeof BASE_VIEWPORT_CONFIGS.aruba
    | typeof BASE_VIEWPORT_CONFIGS.azerbaijan
    | typeof BASE_VIEWPORT_CONFIGS.bahrain
    | typeof BASE_VIEWPORT_CONFIGS.barbados
    | typeof BASE_VIEWPORT_CONFIGS.belarus
    | typeof BASE_VIEWPORT_CONFIGS.belize
    | typeof BASE_VIEWPORT_CONFIGS.benin
    | typeof BASE_VIEWPORT_CONFIGS.bermuda
    | typeof BASE_VIEWPORT_CONFIGS.bhutan
    | typeof BASE_VIEWPORT_CONFIGS.bolivia
    | typeof BASE_VIEWPORT_CONFIGS.bosnia_and_herzegovina
    | typeof BASE_VIEWPORT_CONFIGS.botswana
    | typeof BASE_VIEWPORT_CONFIGS.british_virgin_islands
    | typeof BASE_VIEWPORT_CONFIGS.brunei
    | typeof BASE_VIEWPORT_CONFIGS.bulgaria
    | typeof BASE_VIEWPORT_CONFIGS.cambodia
    | typeof BASE_VIEWPORT_CONFIGS.cameroon
    | typeof BASE_VIEWPORT_CONFIGS.cape_verde
    | typeof BASE_VIEWPORT_CONFIGS.drc
    | typeof BASE_VIEWPORT_CONFIGS.chad
    | typeof BASE_VIEWPORT_CONFIGS.chile
    | typeof BASE_VIEWPORT_CONFIGS.china
    | typeof BASE_VIEWPORT_CONFIGS.colombia
    | typeof BASE_VIEWPORT_CONFIGS.croatia
    | typeof BASE_VIEWPORT_CONFIGS.cyprus
    | typeof BASE_VIEWPORT_CONFIGS.czech_republic
    | typeof BASE_VIEWPORT_CONFIGS.central_african_republic
    | typeof BASE_VIEWPORT_CONFIGS.djibouti
    | typeof BASE_VIEWPORT_CONFIGS.ecuador
    | typeof BASE_VIEWPORT_CONFIGS.egypt
    | typeof BASE_VIEWPORT_CONFIGS.fiji
    | typeof BASE_VIEWPORT_CONFIGS.georgia
    | typeof BASE_VIEWPORT_CONFIGS.greece
    | typeof BASE_VIEWPORT_CONFIGS.hungary
    | typeof BASE_VIEWPORT_CONFIGS.indonesia
    | typeof BASE_VIEWPORT_CONFIGS.iraq
    | typeof BASE_VIEWPORT_CONFIGS.italy
    | typeof BASE_VIEWPORT_CONFIGS.japan
    | typeof BASE_VIEWPORT_CONFIGS.jordan
    | typeof BASE_VIEWPORT_CONFIGS.kazakhstan
    | typeof BASE_VIEWPORT_CONFIGS.kyrgyzstan
    | typeof BASE_VIEWPORT_CONFIGS.laos
    | typeof BASE_VIEWPORT_CONFIGS.libya
    | typeof BASE_VIEWPORT_CONFIGS.macedonia
    | typeof BASE_VIEWPORT_CONFIGS.malaysia
    | typeof BASE_VIEWPORT_CONFIGS.mali
    | typeof BASE_VIEWPORT_CONFIGS.mauritania
    | typeof BASE_VIEWPORT_CONFIGS.mexico
    | typeof BASE_VIEWPORT_CONFIGS.monaco
    | typeof BASE_VIEWPORT_CONFIGS.mongolia
    | typeof BASE_VIEWPORT_CONFIGS.montenegro
    | typeof BASE_VIEWPORT_CONFIGS.myanmar
    | typeof BASE_VIEWPORT_CONFIGS.namibia
    | typeof BASE_VIEWPORT_CONFIGS.new_zealand
    | typeof BASE_VIEWPORT_CONFIGS.nicaragua
    | typeof BASE_VIEWPORT_CONFIGS.nigeria
    | typeof BASE_VIEWPORT_CONFIGS.north_korea
    | typeof BASE_VIEWPORT_CONFIGS.panama
    | typeof BASE_VIEWPORT_CONFIGS.paraguay
    | typeof BASE_VIEWPORT_CONFIGS.peru
    | typeof BASE_VIEWPORT_CONFIGS.philippines
    | typeof BASE_VIEWPORT_CONFIGS.portugal
    | typeof BASE_VIEWPORT_CONFIGS.romania
    | typeof BASE_VIEWPORT_CONFIGS.russia
    | typeof BASE_VIEWPORT_CONFIGS.saudi_arabia
    | typeof BASE_VIEWPORT_CONFIGS.senegal
    | typeof BASE_VIEWPORT_CONFIGS.serbia
    | typeof BASE_VIEWPORT_CONFIGS.slovakia
    | typeof BASE_VIEWPORT_CONFIGS.slovenia
    | typeof BASE_VIEWPORT_CONFIGS.south_africa
    | typeof BASE_VIEWPORT_CONFIGS.south_korea
    | typeof BASE_VIEWPORT_CONFIGS.south_sudan
    | typeof BASE_VIEWPORT_CONFIGS.spain
    | typeof BASE_VIEWPORT_CONFIGS.sudan
    | typeof BASE_VIEWPORT_CONFIGS.syria
    | typeof BASE_VIEWPORT_CONFIGS.tajikistan
    | typeof BASE_VIEWPORT_CONFIGS.thailand
    | typeof BASE_VIEWPORT_CONFIGS.turkey
    | typeof BASE_VIEWPORT_CONFIGS.turkmenistan
    | typeof BASE_VIEWPORT_CONFIGS.ukraine
    | typeof BASE_VIEWPORT_CONFIGS.uruguay
    | typeof BASE_VIEWPORT_CONFIGS.uzbekistan
    | typeof BASE_VIEWPORT_CONFIGS.vietnam
    | typeof BASE_VIEWPORT_CONFIGS.bangladesh
    | typeof BASE_VIEWPORT_CONFIGS.ethiopia
    | typeof BASE_VIEWPORT_CONFIGS.morocco
    | typeof BASE_VIEWPORT_CONFIGS.taiwan
    | typeof BASE_VIEWPORT_CONFIGS.tunisia
    | typeof BASE_VIEWPORT_CONFIGS.zimbabwe
    | typeof BASE_VIEWPORT_CONFIGS.madagascar
    | typeof BASE_VIEWPORT_CONFIGS.ghana
    | typeof BASE_VIEWPORT_CONFIGS.yemen
    | typeof BASE_VIEWPORT_CONFIGS.honduras
    | typeof BASE_VIEWPORT_CONFIGS.venezuela
    | typeof BASE_VIEWPORT_CONFIGS.nepal
    | typeof BASE_VIEWPORT_CONFIGS.togo
    | typeof BASE_VIEWPORT_CONFIGS.liberia
    | typeof BASE_VIEWPORT_CONFIGS.ireland
    | typeof BASE_VIEWPORT_CONFIGS.palestine
    | typeof BASE_VIEWPORT_CONFIGS.eritrea
    | typeof BASE_VIEWPORT_CONFIGS.lithuania
    | typeof BASE_VIEWPORT_CONFIGS.qatar
    | typeof BASE_VIEWPORT_CONFIGS.malawi
    | typeof BASE_VIEWPORT_CONFIGS.jamaica
    | typeof BASE_VIEWPORT_CONFIGS.somalia
    | typeof BASE_VIEWPORT_CONFIGS.uganda
    | typeof BASE_VIEWPORT_CONFIGS.kenya
    | typeof BASE_VIEWPORT_CONFIGS.tanzania
    | typeof BASE_VIEWPORT_CONFIGS.mozambique
    | typeof BASE_VIEWPORT_CONFIGS.moldova
    | typeof BASE_VIEWPORT_CONFIGS.gabon
    | typeof BASE_VIEWPORT_CONFIGS.lesotho
    | typeof BASE_VIEWPORT_CONFIGS.latvia
    | typeof BASE_VIEWPORT_CONFIGS.swaziland
    | typeof BASE_VIEWPORT_CONFIGS.comoros
    | typeof BASE_VIEWPORT_CONFIGS.guyana
    | typeof BASE_VIEWPORT_CONFIGS.mauritius
    | typeof BASE_VIEWPORT_CONFIGS.estonia
    | typeof BASE_VIEWPORT_CONFIGS.suriname
    | typeof BASE_VIEWPORT_CONFIGS.malta
    | typeof BASE_VIEWPORT_CONFIGS.maldives
    | typeof BASE_VIEWPORT_CONFIGS.bahamas
    | typeof BASE_VIEWPORT_CONFIGS.vanuatu
    | typeof BASE_VIEWPORT_CONFIGS.zambia
    | typeof BASE_VIEWPORT_CONFIGS.guatemala
    | typeof BASE_VIEWPORT_CONFIGS.guinea
    | typeof BASE_VIEWPORT_CONFIGS.rwanda
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
export const SVG_VIEWPORT_CONFIGS: Record<
  string,
  ReturnType<typeof createMapViewportConfig>
> = {
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
  antigua_and_barbuda: createMapViewportConfig("antigua_and_barbuda"),
  aruba: createMapViewportConfig("aruba"),
  azerbaijan: createMapViewportConfig("azerbaijan"),
  bahrain: createMapViewportConfig("bahrain"),
  barbados: createMapViewportConfig("barbados"),
  belarus: createMapViewportConfig("belarus"),
  belize: createMapViewportConfig("belize"),
  benin: createMapViewportConfig("benin"),
  bermuda: createMapViewportConfig("bermuda"),
  bhutan: createMapViewportConfig("bhutan"),
  bolivia: createMapViewportConfig("bolivia"),
  bosnia_and_herzegovina: createMapViewportConfig("bosnia_and_herzegovina"),
  botswana: createMapViewportConfig("botswana"),
  british_virgin_islands: createMapViewportConfig("british_virgin_islands"),
  brunei: createMapViewportConfig("brunei"),
  bulgaria: createMapViewportConfig("bulgaria"),
  cambodia: createMapViewportConfig("cambodia"),
  cameroon: createMapViewportConfig("cameroon"),
  cape_verde: createMapViewportConfig("cape_verde"),
  drc: createMapViewportConfig("drc"),
  chad: createMapViewportConfig("chad"),
  chile: createMapViewportConfig("chile"),
  china: createMapViewportConfig("china"),
  colombia: createMapViewportConfig("colombia"),
  croatia: createMapViewportConfig("croatia"),
  cyprus: createMapViewportConfig("cyprus"),
  czech_republic: createMapViewportConfig("czech_republic"),
  central_african_republic: createMapViewportConfig("central_african_republic"),
  djibouti: createMapViewportConfig("djibouti"),
  ecuador: createMapViewportConfig("ecuador"),
  egypt: createMapViewportConfig("egypt"),
  fiji: createMapViewportConfig("fiji"),
  georgia: createMapViewportConfig("georgia"),
  greece: createMapViewportConfig("greece"),
  hungary: createMapViewportConfig("hungary"),
  indonesia: createMapViewportConfig("indonesia"),
  iraq: createMapViewportConfig("iraq"),
  italy: createMapViewportConfig("italy"),
  japan: createMapViewportConfig("japan"),
  jordan: createMapViewportConfig("jordan"),
  kazakhstan: createMapViewportConfig("kazakhstan"),
  kyrgyzstan: createMapViewportConfig("kyrgyzstan"),
  laos: createMapViewportConfig("laos"),
  libya: createMapViewportConfig("libya"),
  macedonia: createMapViewportConfig("macedonia"),
  malaysia: createMapViewportConfig("malaysia"),
  mali: createMapViewportConfig("mali"),
  mauritania: createMapViewportConfig("mauritania"),
  mexico: createMapViewportConfig("mexico"),
  monaco: createMapViewportConfig("monaco"),
  mongolia: createMapViewportConfig("mongolia"),
  montenegro: createMapViewportConfig("montenegro"),
  myanmar: createMapViewportConfig("myanmar"),
  namibia: createMapViewportConfig("namibia"),
  new_zealand: createMapViewportConfig("new_zealand"),
  nicaragua: createMapViewportConfig("nicaragua"),
  nigeria: createMapViewportConfig("nigeria"),
  north_korea: createMapViewportConfig("north_korea"),
  panama: createMapViewportConfig("panama"),
  paraguay: createMapViewportConfig("paraguay"),
  peru: createMapViewportConfig("peru"),
  philippines: createMapViewportConfig("philippines"),
  portugal: createMapViewportConfig("portugal"),
  romania: createMapViewportConfig("romania"),
  russia: createMapViewportConfig("russia"),
  saudi_arabia: createMapViewportConfig("saudi_arabia"),
  senegal: createMapViewportConfig("senegal"),
  serbia: createMapViewportConfig("serbia"),
  slovakia: createMapViewportConfig("slovakia"),
  slovenia: createMapViewportConfig("slovenia"),
  south_africa: createMapViewportConfig("south_africa"),
  south_korea: createMapViewportConfig("south_korea"),
  south_sudan: createMapViewportConfig("south_sudan"),
  spain: createMapViewportConfig("spain"),
  sudan: createMapViewportConfig("sudan"),
  syria: createMapViewportConfig("syria"),
  tajikistan: createMapViewportConfig("tajikistan"),
  thailand: createMapViewportConfig("thailand"),
  turkey: createMapViewportConfig("turkey"),
  turkmenistan: createMapViewportConfig("turkmenistan"),
  ukraine: createMapViewportConfig("ukraine"),
  uruguay: createMapViewportConfig("uruguay"),
  uzbekistan: createMapViewportConfig("uzbekistan"),
  vietnam: createMapViewportConfig("vietnam"),
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
