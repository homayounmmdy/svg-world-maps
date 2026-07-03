# svg-world-maps

[![npm version](https://badge.fury.io/js/svg-world-maps.svg)](https://www.npmjs.com/package/svg-world-maps)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm downloads](https://img.shields.io/npm/dt/svg-world-maps.svg)](https://www.npmjs.com/package/svg-world-maps)

Simple, lightweight SVG maps for JavaScript projects.

🎉 **Now with 13 Country Maps + Europe! Hover Effects, Tooltips, Labels & Click Support!**

> 📚 **Documentation**: [Wiki Home](https://github.com/homayounmmdy/svg-world-maps/wiki) • [Getting Started](https://github.com/homayounmmdy/svg-world-maps/wiki/Getting-Started) • [Optional Maps](https://github.com/homayounmmdy/svg-world-maps/wiki/Optional-Maps)  
> 💬 **Community**: [Discussions](https://github.com/homayounmmdy/svg-world-maps/discussions) • [Report Issue](https://github.com/homayounmmdy/svg-world-maps/issues)

## Features

- 🌍 **Multiple Maps**: World map + 13 country maps (USA, Germany, India, Iran, Netherlands, France, Australia, Brazil, Great Britain, Belgium) + Whole Europe map!
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
npm install svg-world-maps@0.6.0
```

> 💡 **Optional Maps**: Keep your bundle small by only adding the maps you need.  
> ```bash
> npx add-map afghanistan          # Add Afghanistan map
> npx add-map usa          # Add USA map
> npx add-map germany      # Add Germany map
> npx add-map india        # Add India map
> npx add-map iran         # Add Iran map
> npx add-map netherlands  # Add Netherlands map
> npx add-map france       # Add France map
> npx add-map australia    # Add Australia map
> npx add-map brazil       # Add Brazil map
> npx add-map gb           # Add Great Britain map
> npx add-map belgium      # Add Belgium map
> npx add-map europe       # Add Europe map
> npx add-map switzerland       # Add Switzerland map
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
| `mapType` | `string` | Type of map to generate | `"world"`, `"afghanistan"`,`"usa"`, `"germany"`, `"india"`, `"iran"`, `"netherlands"`, `"france"`, `"australia"`, `"brazil"`, `"gb"`, `"belgium"`,`"switzerland"`, `"europe"` |
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

> **Note on `showLabel`**: Text labels are currently supported for `afghanistan`, `germany`, `france`, `australia`, `brazil`, `india`, `gb` (Great Britain), `netherlands`, and `belgium`. 
> Maps like `iran`, `usa`, `world`, and `europe` **do not support `showLabel` yet** due to OpenStreetMap data quality limitations. Setting this to `true` or `false` on these maps will not produce any visual changes. Support will be added in future versions.

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

// USA map with hover effect (requires optional setup)
createMap("usa", {
  background: "#f0f4f8",
  borders: "#334155",
  hoverColor: "rgba(59, 130, 246, 0.3)"
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
| `"usa"` | 🇺🇸 | USA map with all 50 states + DC | v0.4.0 | 🔁 Optional |
| `"germany"` | 🇩🇪 | Germany map with 16 states | v0.5.0 | 🔁 Optional |
| `"india"` | 🇮🇳 | India map with 28 states + 8 union territories | v0.5.0 | 🔁 Optional |
| `"iran"` | 🇮🇷 | Iran map with 31 provinces | v0.5.0 | 🔁 Optional |
| `"netherlands"` | 🇳🇱 | Netherlands map with 12 provinces | v0.5.0 | 🔁 Optional |
| `"france"` | 🇫🇷 | France map with 18 regions | v0.5.0 | 🔁 Optional |
| `"australia"` | 🇦🇺 | Australia map with 6 states + 10 territories | v0.5.0 | 🔁 Optional |
| `"brazil"` | 🇧🇷 | Brazil map with 26 states + federal district | v0.5.0 | 🔁 Optional |
| `"gb"` | 🇬🇧 | Great Britain map with constituent countries | v0.5.0 | 🔁 Optional |
| `"belgium"` | 🇧🇪 | Belgium map with 10 provinces | v0.6.0 | 🔁 Optional |
| `"switzerland"` | 🇨🇭 | Switzerland map with 10 provinces              | v0.6.0 | 🔁 Optional |
| `"europe"` | 🇪🇺 | Whole Europe map | v0.6.0 | 🔁 Optional |

> 🔁 **Optional maps** keep your bundle small. Add them only when needed:  
> ```bash
> npx add-map usa
> npx add-map germany
> npx add-map india
> npx add-map iran
> npx add-map netherlands
> npx add-map france
> npx add-map australia
> npx add-map brazil
> npx add-map gb
> npx add-map switzerland
> npx add-map belgium
> npx add-map europe
> ```  
> [Full setup guide →](https://github.com/homayounmmdy/svg-world-maps/wiki/Optional-Maps)

## Roadmap

- [x] Afghanistan map (v0.1.0)
- [x] World map (v0.2.0)
- [x] Optional maps system (v0.3.0)
- [x] USA map + hoverColor + click support via data attributes (v0.4.0)
- [x] Germany, India, Iran, Netherlands, France, Australia, Brazil, Great Britain maps (v0.5.0)
- [x] Belgium & Switzerland & Europe maps + Tooltips + Labels + `register-map` script (v0.6.0)
- [ ] More country maps (Canada, China, Japan, Mexico, etc.)
- [ ] Keyboard navigation & accessibility improvements
- [ ] Export to PNG/SVG file

## Migration Guide

### From v0.5.0 to v0.6.0

- **New Maps**: Added **Belgium** , **Switzerland** and whole **Europe** maps.
- **New Features**: 
  - Added `tooltip` option for hover tooltips.
  - Added `showLabel` option to render text labels on regions (Note: currently unsupported on `usa`, `world`, `iran`, and `europe`).
- **CLI Improvements**: 
  - Created `npx register-map` script to automatically register maps, significantly improving development speed.
  - Refactored user logging in the `add-map` script.
  - **Fix**: Resolved a bug where `add-map` would overwrite existing maps.
- **Internal**: Removed `dist/` from version control to reduce repo size.

**To use the new maps:**
```bash
npx add-map belgium
npx add-map europe

# Automatically register your added maps
npx register-map
```

**To use tooltips and labels:**
```javascript
createMap("germany", { 
  tooltip: true, 
  showLabel: true,
  hoverColor: "lightblue"
});
```

### From v0.4.0 to v0.5.0

No breaking changes. New maps are optional additions.

**To use new country maps:**
```bash
# Add any of the new maps
npx add-map germany
npx add-map india
npx add-map iran
# ... and more

# Register in your code
import { registerMapData } from "svg-world-maps";
import germanyData from "./src/maps/germany";
registerMapData("germany", germanyData);
```

### From v0.1.0 to v0.2.0

```javascript
// v0.1.0 (old)
import { createAfghanistanMap } from "svg-world-maps";
const map = createAfghanistanMap({ 
  fill: "#ff0000", 
  stroke: "#ffffff" 
});

// v0.2.0 (new)
import { createMap } from "svg-world-maps";
const map = createMap("afghanistan", { 
  background: "#ff0000", 
  borders: "#ffffff",
  size: "lg" 
});
```

### From v0.3.x to v0.4.0

No breaking changes. New features are optional.

**To use the USA map:**
```bash
# 1. Add the optional map
npx add-map usa

# 2. Register it in your code
import { registerMapData } from "svg-world-maps";
import usaData from "./src/maps/usa";
registerMapData("usa", usaData);
```

**To use hoverColor or click handling:**
```javascript
// Add hover effect
createMap("world", { hoverColor: "rgba(0, 123, 255, 0.4)" });

// Add click handling (vanilla JS)
container.addEventListener("click", (e) => {
  if (e.target.dataset.code) {
    console.log(e.target.dataset.name);
  }
});
```

## 📚 Documentation & Support

| Resource | Link |
|----------|------|
| 🏠 **Wiki Home** | [github.com/homayounmmdy/svg-world-maps/wiki](https://github.com/homayounmmdy/svg-world-maps/wiki) |
| 🚀 **Getting Started** | [Quick start guide](https://github.com/homayounmmdy/svg-world-maps/wiki/Getting-Started) |
| 🗺️ **Optional Maps** | [Add USA, Afghanistan & more](https://github.com/homayounmmdy/svg-world-maps/wiki/Optional-Maps) |
| 💬 **Discussions** | [Ask questions & share ideas](https://github.com/homayounmmdy/svg-world-maps/discussions) |
| 🐛 **Report Issue** | [Open a bug report](https://github.com/homayounmmdy/svg-world-maps/issues) |

## Contributing

Contributions are welcome! Feel free to:

- 🐛 Report bugs
- 💡 Suggest new features
- 🌍 Add new country maps
- 📝 Improve documentation

## License

MIT © homayounmmdy

## Support

If you find this package helpful, please consider:
- ⭐ Starring on [GitHub](https://github.com/homayounmmdy/svg-world-maps)
- 🐦 Sharing on Twitter
- 📢 Telling your friends

**Made with ❤️ for the open-source community**
