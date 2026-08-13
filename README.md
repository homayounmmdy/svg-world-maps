# svg-world-maps

[![npm version](https://badge.fury.io/js/svg-world-maps.svg)](https://www.npmjs.com/package/svg-world-maps)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm downloads](https://img.shields.io/npm/dt/svg-world-maps.svg)](https://www.npmjs.com/package/svg-world-maps)

Simple, lightweight SVG maps for JavaScript projects.

<img width="1664" height="928" alt="1783268206" src="https://github.com/user-attachments/assets/4ef39455-47e4-4d96-aa64-a69097874837" />

🎉 **Now with 124 Maps! (World + 123 Countries/Regions) Hover Effects, Tooltips, Labels & Click Support!**

> 📚 **Documentation**: [Wiki Home](https://github.com/homayounmmdy/svg-world-maps/wiki) • [Getting Started](https://github.com/homayounmmdy/svg-world-maps/wiki/Getting-Started) • [Maps Info Report](./MAPS_INFO.md) • [Optional Maps](https://github.com/homayounmmdy/svg-world-maps/wiki/Optional-Maps)  
> 💬 **Community**: [Discussions](https://github.com/homayounmmdy/svg-world-maps/discussions) • [Report Issue](https://github.com/homayounmmdy/svg-world-maps/issues)

## Features

- 🌍 **Massive Map Library**: World map + 123 country/region maps (USA, Germany, India, China, Japan, Russia, Spain, and many more!)
- 🏷️ **Tooltips & Labels**: Built-in tooltips on hover and region text labels.
- 📏 **Flexible Sizing**: 8 preset sizes + custom scale factors
- 🎨 **Customizable**: Background, borders, and hover colors
- 👆 **Interactive**: Click support via `data-code` and `data-name` attributes
- ⚡ **Zero dependencies**: Pure SVG output
- 🛠 **Framework agnostic**: Works with React, Vue, Svelte, Vanilla JS, etc.
- 📦 **TypeScript support**: Full type definitions included
- 🔧 **Simple API**: One function to rule them all

## Installation

```bash
npm install svg-world-maps@0.8.0
```

> 💡 **Optional Maps**: Keep your bundle small by only adding the maps you need.  
> ```bash
> # Legacy & Popular Maps
> npx add-map afghanistan
> npx add-map usa
> npx add-map germany
> npx add-map india
> npx add-map iran
> npx add-map netherlands
> npx add-map france
> npx add-map australia
> npx add-map brazil
> npx add-map gb
> npx add-map belgium
> npx add-map switzerland
> npx add-map europe
> 
> # 🆕 New in v0.7.0
> npx add-map africa
> npx add-map pakistan
> npx add-map canada
> npx add-map argentina
> npx add-map armenia
> npx add-map austria
> npx add-map denmark
> npx add-map finland
> npx add-map greenland
> npx add-map iceland
> npx add-map israel
> npx add-map kuwait
> npx add-map lebanon
> npx add-map luxembourg
> npx add-map norway
> npx add-map oman
> npx add-map poland
> npx add-map singapore
> npx add-map sweden
> npx add-map uae
> npx add-map vatican
> 
> # 🆕 New in v0.8.0 (89 Maps!)
> npx add-map china
> npx add-map japan
> npx add-map russia
> npx add-map spain
> npx add-map italy
> npx add-map mexico
> npx add-map south_africa
> # ... and 82 more!
> ```  
>
> ⚡ **Automate Registration**: You can now automatically register added maps to speed up development!
> ```bash
> npx register-map
> ```  
> [Learn more →](https://github.com/homayounmmdy/svg-world-maps/wiki/Optional-Maps)

## Usage

### React + Vite

```jsx
import { createMap } from "svg-world-maps";

const App = () => {
  // Create a world map with tooltips and labels
  const worldMap = createMap("world", {
    background: "#e6f3ff",   // Background color
    borders: "#2c3e50",      // Border color
    hoverColor: "rgba(59, 130, 246, 0.3)", // Hover highlight
    tooltip: true,           // Show tooltip on hover
    showLabel: true,         // Show text labels (if supported by map)
    size: "lg"               // Size preset
  });

  return (
    <div dangerouslySetInnerHTML={{ __html: worldMap }} />
  );
};

export default App;
```

### Vanilla JavaScript with Click Handling

```javascript
import { createMap } from "svg-world-maps";

const mapSVG = createMap("world", {
  background: "#e6f3ff",
  borders: "#2c3e50",
  hoverColor: "lightblue",
  tooltip: true
});

const container = document.getElementById("map-container");
container.innerHTML = mapSVG;

// Handle region clicks using data attributes
container.addEventListener("click", (e) => {
  const target = e.target;
  const code = target.dataset.code;
  const name = target.dataset.name;
  
  if (code && name) {
    console.log(`Clicked: ${name} (${code})`);
    // Show tooltip, navigate, filter data, etc.
  }
});
```

## API Reference

### `createMap(mapType, options)`

Creates an SVG map string.

#### Parameters

| Parameter | Type | Description | Options |
|-----------|------|-------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| `mapType` | `string` | Type of map to generate | `"world"`, `"afghanistan"`, `"usa"`, `"germany"`, `"india"`, `"iran"`, `"netherlands"`, `"france"`, `"australia"`, `"brazil"`, `"gb"`, `"belgium"`, `"switzerland"`, `"europe"`, `"africa"`, `"pakistan"`, `"canada"`, `"argentina"`, `"armenia"`, `"austria"`, `"denmark"`, `"finland"`, `"greenland"`, `"iceland"`, `"israel"`, `"kuwait"`, `"lebanon"`, `"luxembourg"`, `"norway"`, `"oman"`, `"poland"`, `"singapore"`, `"sweden"`, `"uae"`, `"vatican"`, `"albania"`, `"algeria"`, `"andorra"`, `"angola"`, `"anguilla"`, `"antigua_and_barbuda"`, `"aruba"`, `"azerbaijan"`, `"bahrain"`, `"barbados"`, `"belarus"`, `"belize"`, `"benin"`, `"bermuda"`, `"bhutan"`, `"bolivia"`, `"bosnia_and_herzegovina"`, `"botswana"`, `"british_virgin_islands"`, `"brunei"`, `"bulgaria"`, `"cambodia"`, `"cameroon"`, `"cape_verde"`, `"central_african_republic"`, `"chad"`, `"chile"`, `"china"`, `"colombia"`, `"croatia"`, `"cyprus"`, `"czech_republic"`, `"democratic_republic_of_the_congo"`, `"djibouti"`, `"ecuador"`, `"egypt"`, `"fiji"`, `"georgia"`, `"greece"`, `"hungary"`, `"indonesia"`, `"iraq"`, `"italy"`, `"japan"`, `"jordan"`, `"kazakhstan"`, `"kyrgyzstan"`, `"laos"`, `"libya"`, `"macedonia"`, `"malaysia"`, `"mali"`, `"mauritania"`, `"mexico"`, `"monaco"`, `"mongolia"`, `"montenegro"`, `"myanmar"`, `"namibia"`, `"new_zealand"`, `"nicaragua"`, `"nigeria"`, `"north_korea"`, `"panama"`, `"paraguay"`, `"peru"`, `"philippines"`, `"portugal"`, `"romania"`, `"russia"`, `"saudi_arabia"`, `"senegal"`, `"serbia"`, `"slovakia"`, `"slovenia"`, `"south_africa"`, `"south_korea"`, `"south_sudan"`, `"spain"`, `"sudan"`, `"syria"`, `"tajikistan"`, `"thailand"`, `"turkey"`, `"turkmenistan"`, `"ukraine"`, `"uruguay"`, `"uzbekistan"`, `"vietnam"` |
| `options` | `object` | Configuration options | See below |

*\* Optional maps require setup via `npx add-map` — [see guide](https://github.com/homayounmmdy/svg-world-maps/wiki/Optional-Maps)*

#### Options

| Option | Type | Description | Default |
|--------|------|-------------|---------|
| `background` | `string` | Map background color (any valid CSS color) | `"currentColor"` |
| `borders` | `string` | Country/state border color | `"#000000"` |
| `hoverColor` | `string` | Color applied to regions on hover | `undefined` |
| `tooltip` | `boolean` | Show a tooltip when hovering over regions | `false` |
| `showLabel` | `boolean` | Display text labels on map regions | `false` |
| `size` | `string \| number` | Map size (preset or custom scale) | `"lg"` |

> **Note on `hoverColor`**: The library outputs the color value in the SVG. Actual hover behavior requires CSS `:hover` rules or JavaScript event listeners in your implementation.

> **Note on `showLabel`**: Text labels are supported for most maps. However, `africa`, `europe`, `iran`, and `usa` **do not support `showLabel` yet** due to OpenStreetMap data quality and coordinate limitations. Setting this to `true` on these maps will not produce visual changes. Support will be added in future versions. See the [Maps Info Report](./MAPS_INFO.md) for the latest label support status.

### Size Options

#### Preset Sizes
| Preset | Scale | Description |
|--------|-------|-------------|
| `"xs"` | 0.25x | Extra small - 25% of original |
| `"sm"` | 0.5x | Small - 50% of original |
| `"md"` | 0.75x | Medium - 75% of original |
| `"lg"` | 1x | Large - 100% of original **(default)** |
| `"xl"` | 1.5x | Extra large - 150% of original |
| `"2xl"` | 2x | 2X Large - 200% of original |
| `"3xl"` | 2.5x | 3X Large - 250% of original |
| `"4xl"` | 3x | 4X Large - 300% of original |

#### Custom Scale Factors
Use any number for precise control:
```javascript
{ size: 0.33 }  // Exactly one-third size
{ size: 1.25 }  // 25% larger
{ size: 1.75 }  // 75% larger
{ size: 2.5 }   // Two and a half times larger
{ size: 0.8 }   // 20% smaller
```

## Interactive Features

### Tooltips and Labels

Enable built-in tooltips to show region names when users hover over the map, and render text labels directly on the map regions.

```javascript
const mapSVG = createMap("germany", {
  tooltip: true,
  showLabel: true,
  hoverColor: "lightblue"
});
```

### Click Handling with Data Attributes

Every region in the generated SVG includes two data attributes:

| Attribute | Description | Example |
|-----------|-------------|---------|
| `data-code` | Short region identifier | `"US-CA"`, `"IN-MH"`, `"DE-BY"`, `"GB-ENG"` |
| `data-name` | Full region name | `"California"`, `"Maharashtra"`, `"Bavaria"`, `"England"` |

**React Example with Toast Notification:**

```jsx
import { useEffect, useRef, useState } from "react";
import { createMap, registerMapData } from "svg-world-maps";
import usaData from "./maps/usa";

registerMapData("usa", usaData);

const App = () => {
  const [selected, setSelected] = useState(null);
  const containerRef = useRef(null);

  const Map = createMap("usa", {
    background: "#e6f3ff",
    borders: "#2c3e50",
    size: "md",
    hoverColor: "purple",
    tooltip: true
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleClick = (e) => {
      const target = e.target;
      const code = target.dataset.code;
      const name = target.dataset.name;

      if (code && name) {
        setSelected({ name, code });
        setTimeout(() => setSelected(null), 3000);
      }
    };

    container.addEventListener("click", handleClick);
    return () => container.removeEventListener("click", handleClick);
  }, []);

  return (
    <div>
      <div ref={containerRef} dangerouslySetInnerHTML={{ __html: Map }} />
      {selected && (
        <div className="toast">
          {selected.name} ({selected.code})
        </div>
      )}
    </div>
  );
};
```

**Use Cases:**
- Show region details in a tooltip or modal
- Navigate to a detail page: `/regions/${code}`
- Filter dashboard data by selected region
- Track analytics per region click

## Examples

### Basic Examples

```javascript
// World map with tooltips
createMap("world", { tooltip: true });

// Canada map with hover effect (requires optional setup)
createMap("canada", {
  background: "#f0f4f8",
  borders: "#334155",
  hoverColor: "rgba(255, 0, 0, 0.3)"
});

// Germany map with labels
createMap("germany", { size: "xs", showLabel: true });

// India map with custom colors
createMap("india", {
  background: "#fff5e6",
  borders: "#ff9933",
  hoverColor: "rgba(255, 153, 51, 0.3)"
});

// Europe map
createMap("europe", { size: "md", tooltip: true });

// World map - custom scale with borders
createMap("world", {
  borders: "#3498db",
  size: 1.25
});
```

### React: Multiple Maps

```jsx
import { createMap } from "svg-world-maps";

const Maps = () => {
  const world = createMap("world", { size: "sm", hoverColor: "lightgray", tooltip: true });
  const germany = createMap("germany", { size: "md", hoverColor: "lightblue", showLabel: true });
  const india = createMap("india", { size: "md", hoverColor: "lightgreen" });

  return (
    <div>
      <h3>World Map</h3>
      <div dangerouslySetInnerHTML={{ __html: world }} />
      
      <h3>Germany Map</h3>
      <div dangerouslySetInnerHTML={{ __html: germany }} />
      
      <h3>India Map</h3>
      <div dangerouslySetInnerHTML={{ __html: india }} />
    </div>
  );
};
```

## Available Maps

| Map | Type | Description | Since | Status |
|-----|------|------------------------------------------------|-------|--------|
| `"world"` | 🌍 | Complete world map with all 195 countries | v0.2.0 | ✅ Included by default |
| `"afghanistan"` | 🗺️ | Afghanistan map with 34 provinces | v0.1.0 | 🔁 Optional |
| `"usa"` | 🇺🇸 | USA map with 51 states/regions | v0.4.0 | 🔁 Optional |
| `"germany"` | 🇩🇪 | Germany map with 16 states | v0.5.0 | 🔁 Optional |
| `"india"` | 🇮🇳 | India map with 36 states/territories | v0.5.0 | 🔁 Optional |
| `"iran"` | 🇮🇷 | Iran map with 31 provinces | v0.5.0 | 🔁 Optional |
| `"netherlands"` | 🇳🇱 | Netherlands map with 12 provinces | v0.5.0 | 🔁 Optional |
| `"france"` | 🇫🇷 | France map with 13 regions | v0.5.0 | 🔁 Optional |
| `"australia"` | 🇦🇺 | Australia map with 8 states/territories | v0.5.0 | 🔁 Optional |
| `"brazil"` | 🇧🇷 | Brazil map with 27 states | v0.5.0 | 🔁 Optional |
| `"gb"` | 🇬🇧 | Great Britain map with 232 regions | v0.5.0 | 🔁 Optional |
| `"belgium"` | 🇧🇪 | Belgium map with 3 regions | v0.6.0 | 🔁 Optional |
| `"switzerland"` | 🇨🇭 | Switzerland map with 26 cantons | v0.6.0 | 🔁 Optional |
| `"europe"` | 🇪🇺 | Whole Europe map (45 countries) | v0.6.0 | 🔁 Optional |
| `"africa"` | 🌍 | Africa map (50 countries) | v0.7.0 | 🔁 Optional |
| `"pakistan"` | 🇵🇰 | Pakistan map with 7 regions | v0.7.0 | 🔁 Optional |
| `"canada"` | 🇨🇦 | Canada map with 13 provinces/territories | v0.7.0 | 🔁 Optional |
| `"argentina"` | 🇦🇷 | Argentina map with 24 provinces | v0.7.0 | 🔁 Optional |
| `"armenia"` | 🇦🇲 | Armenia map with 11 provinces | v0.7.0 | 🔁 Optional |
| `"austria"` | 🇦🇹 | Austria map with 9 states | v0.7.0 | 🔁 Optional |
| `"denmark"` | 🇩🇰 | Denmark map with 5 regions | v0.7.0 | 🔁 Optional |
| `"finland"` | 🇫🇮 | Finland map with 19 regions | v0.7.0 | 🔁 Optional |
| `"greenland"` | 🇬🇱 | Greenland map with 5 municipalities | v0.7.0 | 🔁 Optional |
| `"iceland"` | 🇮🇸 | Iceland map with 8 regions | v0.7.0 | 🔁 Optional |
| `"israel"` | 🇮🇱 | Israel map with 6 districts | v0.7.0 | 🔁 Optional |
| `"kuwait"` | 🇰🇼 | Kuwait map with 6 governorates | v0.7.0 | 🔁 Optional |
| `"lebanon"` | 🇱🇧 | Lebanon map with 8 governorates | v0.7.0 | 🔁 Optional |
| `"luxembourg"` | 🇱🇺 | Luxembourg map with 12 cantons | v0.7.0 | 🔁 Optional |
| `"norway"` | 🇳🇴 | Norway map with 11 counties | v0.7.0 | 🔁 Optional |
| `"oman"` | 🇴🇲 | Oman map with 11 governorates | v0.7.0 | 🔁 Optional |
| `"poland"` | 🇵🇱 | Poland map with 16 voivodeships | v0.7.0 | 🔁 Optional |
| `"singapore"` | 🇸🇬 | Singapore map with 5 regions | v0.7.0 | 🔁 Optional |
| `"sweden"` | 🇸🇪 | Sweden map with 21 counties | v0.7.0 | 🔁 Optional |
| `"uae"` | 🇦🇪 | UAE map with 7 emirates | v0.7.0 | 🔁 Optional |
| `"vatican"` | 🇻🇦 | Vatican City map | v0.7.0 | 🔁 Optional |
| **v0.8.0 Additions (89 Maps)** | 🌍 | Albania, Algeria, Andorra, Angola, Anguilla, Antigua and Barbuda, Aruba, Azerbaijan, Bahrain, Barbados, Belarus, Belize, Benin, Bermuda, Bhutan, Bolivia, Bosnia and Herzegovina, Botswana, British Virgin Islands, Brunei, Bulgaria, Cambodia, Cameroon, Cape Verde, Central African Republic, Chad, Chile, China, Colombia, Croatia, Cyprus, Czech Republic, DR Congo, Djibouti, Ecuador, Egypt, Fiji, Georgia, Greece, Hungary, Indonesia, Iraq, Italy, Japan, Jordan, Kazakhstan, Kyrgyzstan, Laos, Libya, Macedonia, Malaysia, Mali, Mauritania, Mexico, Monaco, Mongolia, Montenegro, Myanmar, Namibia, New Zealand, Nicaragua, Nigeria, North Korea, Panama, Paraguay, Peru, Philippines, Portugal, Romania, Russia, Saudi Arabia, Senegal, Serbia, Slovakia, Slovenia, South Africa, South Korea, South Sudan, Spain, Sudan, Syria, Tajikistan, Thailand, Turkey, Turkmenistan, Ukraine, Uruguay, Uzbekistan, Vietnam | v0.8.0 | 🔁 Optional |

> 🔁 **Optional maps** keep your bundle small. Add them only when needed:  
> ```bash
> npx add-map canada
> npx add-map pakistan
> # ... and more
> npx register-map
> ```  
> [Full setup guide →](https://github.com/homayounmmdy/svg-world-maps/wiki/Optional-Maps)

## Roadmap

- [x] Afghanistan map (v0.1.0)
- [x] World map (v0.2.0)
- [x] Optional maps system (v0.3.0)
- [x] USA map + hoverColor + click support via data attributes (v0.4.0)
- [x] Germany, India, Iran, Netherlands, France, Australia, Brazil, Great Britain maps (v0.5.0)
- [x] Belgium, Switzerland, Europe maps + Tooltips + Labels + `register-map` script (v0.6.0)
- [x] 21 New Maps (Canada, Pakistan, Africa, Argentina, Armenia, Austria, Denmark, Finland, Greenland, Iceland, Israel, Kuwait, Lebanon, Luxembourg, Norway, Oman, Poland, Singapore, Sweden, UAE, Vatican) + DX Automation + `map-info` script (v0.7.0)
- [x] 89 New Maps (China, Japan, Russia, Spain, Italy, etc.) + Docsourcos documentation integration (v0.8.0)
- [ ] Label support for USA, Iran, Europe, and Africa maps
- [ ] Keyboard navigation & accessibility improvements
- [ ] Export to PNG/SVG file

## Migration Guide

### From v0.7.0 to v0.8.0

- **Massive Map Expansion**: Added **89 new country maps**, bringing the total to 124 maps! New additions include major countries like China, Japan, Russia, Spain, Italy, Mexico, South Africa, and 83 more.
- **Documentation Generation**: Integrated **Docsourcos** to automatically generate documentation structure. *(Note: While the framework is in place, many feature docs are currently placeholders and will be fully fleshed out in upcoming patches).*
- **Focus**: This release heavily focused on scaling our map library and establishing our new Docsourcos documentation pipeline.
- **Fixes**:
  - Fixed missing/broken **Italy** and **Malaysia** regions on the World map.

**To use the new maps:**
```bash
npx add-map china
npx add-map japan
npx add-map russia
npx add-map spain
# Add any other new map you need

# Automatically register your added maps
npx register-map
```

### From v0.6.0 to v0.7.0

- **New Maps**: Added **21 new maps** including Canada, Pakistan, Argentina, Austria, Denmark, Finland, Israel, Norway, Poland, Singapore, Sweden, UAE, Vatican, and more.
- **DX Improvements**:
    - Added a map creation template and automation script to make adding new maps significantly faster.
    - Registered map management scripts directly in `package.json`.
    - Refactored JSDocs for the list of available maps for better IDE support.
- **New Tools**:
    - Created a `map-info` script that generates a `MAPS_INFO.md` report in the root, providing real-time data on map configurations, state counts, and label support.
- **Fixes**:
    - Fixed an issue where map creation codes were not consistently lowercase in the generated SVG.
    - Resolved a custom issue that occurred when using multiple different maps within a single project.

**To use the new maps:**
```bash
npx add-map canada
npx add-map pakistan
# Add any other new map you need

# Automatically register your added maps
npx register-map
```

### From v0.5.0 to v0.6.0

- **New Maps**: Added **Belgium**, **Switzerland** and whole **Europe** maps.
- **New Features**: Added `tooltip` and `showLabel` options.
- **CLI Improvements**: Created `npx register-map` script and fixed the `add-map` overwrite bug.

*(Older migration guides remain the same: v0.4.0 to v0.5.0, v0.1.0 to v0.2.0, etc.)*

## 📚 Documentation & Support

| Resource | Link |
|----------|------|
| 🏠 **Wiki Home** | [github.com/homayounmmdy/svg-world-maps/wiki](https://github.com/homayounmmdy/svg-world-maps/wiki) |
| 🤖 **Docsourcos** | Documentation is now auto-generated using **Docsourcos**. *(Note: Most features are currently undocumented but will be fully documented in upcoming releases.)* |
| 🚀 **Getting Started** | [Quick start guide](https://github.com/homayounmmdy/svg-world-maps/wiki/Getting-Started) |
| 🗺️ **Maps Info Report** | [View automated map configurations & label support](./MAPS_INFO.md) |
| 🗺️ **Optional Maps** | [Add USA, Afghanistan & more](https://github.com/homayounmmdy/svg-world-maps/wiki/Optional-Maps) |
| 📜 **Changelog** | [View full version history](./CHANGELOG.md) |
| 🛡️ **Security Policy** | [SECURITY.md](./SECURITY.md) |
| 🤝 **Code of Conduct** | [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) |
| 💬 **Discussions** | [Ask questions & share ideas](https://github.com/homayounmmdy/svg-world-maps/discussions) |
| 🐛 **Report Issue** | [Open a bug report](https://github.com/homayounmmdy/svg-world-maps/issues) |

## Contributing

Contributions are welcome! Feel free to:

- 🐛 Report bugs
- 💡 Suggest new features
- 🌍 Add new country maps
- 📝 Improve documentation

Please read our [Code of Conduct](./CODE_OF_CONDUCT.md) before contributing.

## License

MIT © homayounmmdy

## Support

If you find this package helpful, please consider:
- ⭐ Starring on [GitHub](https://github.com/homayounmmdy/svg-world-maps)
- 🐦 Sharing on social media
- 📢 Telling your friends

**Made with ❤️ for the open-source community**