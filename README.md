# svg-world-maps

[![npm version](https://badge.fury.io/js/svg-world-maps.svg)](https://www.npmjs.com/package/svg-world-maps)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm downloads](https://img.shields.io/npm/dt/svg-world-maps.svg)](https://www.npmjs.com/package/svg-world-maps)

Simple, lightweight, and highly customizable SVG maps for modern JavaScript projects.

<img width="1664" height="928" alt="svg-world-maps preview" src="https://github.com/user-attachments/assets/4ef39455-47e4-4d96-aa64-a69097874837" />

> 📚 **Full Documentation**: [svg-world-maps.vercel.app](https://svg-world-maps.vercel.app/)  
> 💬 **Community**: [Discussions](https://github.com/homayounmmdy/svg-world-maps/discussions) • [Issues](https://github.com/homayounmmdy/svg-world-maps/issues)

---

## 🎉 Welcome to v1.1.0!

We are thrilled to announce the **v1.1.0** release! This version focuses on making `svg-world-maps` dramatically smaller, safer to maintain, and even more powerful for interactive projects.

- 🌍 **212+ Maps**: World map + 211 country and region maps (USA, China, Japan, Germany, Iran, Brazil, and many more!).
- ⚡ **Zero Dependencies**: Pure, lightweight SVG output.
- 🛠 **Framework Agnostic**: Works flawlessly with React, Next.js, Vue, Svelte, Angular, or Vanilla JS.
- 📦 **Tree-shakeable**: Keep your bundle tiny by only adding the specific maps you need.
- 🖱️ **Interactive**: Built-in hover effects, native tooltips, static labels, and click handling via data attributes.
- 🛡️ **TypeScript Ready**: Full, strict type definitions included out of the box.
- 🏛️ **Opt-in Capital City Markers** *(New in v1.1.0)*: Add capital city markers to any map with a simple option. Only loaded when enabled.
- 📉 **Massively Smaller npm Bundle** *(New in v1.1.0)*: The full map registry now lives in the dedicated [`svg-world-maps-data`](https://github.com/homayounmmdy/svg-world-maps-data) repository and is referenced on demand. The main package no longer bundles the entire map list, resulting in a huge reduction in installed package size.
- 🧹 **Safer Map Data** *(New in v1.1.0)*: All generated map data files now include a clear **DO NOT EDIT** warning to prevent accidental modifications.
- 🛠 **Refined CLI & Scripts** *(New in v1.1.0)*: CLI scripts were refactored to only add the npm dependencies you actually need, helping reduce package size even further.

---

## 🚀 Installation

```bash
npm install svg-world-maps
# or
yarn add svg-world-maps
# or
pnpm add svg-world-maps
```

---

## ⚡ Quick Start

### React / Next.js
```jsx
import { createMap } from "svg-world-maps";

const App = () => {
  // Generate the SVG string
  const worldMap = createMap("world", {
    background: "#e6f3ff",
    borders: "#2c3e50",
    hoverColor: "rgba(59, 130, 246, 0.3)",
    showTooltip: true,  // Native hover tooltips
    showLabels: true,   // Static text labels (where supported)
    size: "lg"          // Responsive size preset
  });

  return (
    <div dangerouslySetInnerHTML={{ __html: worldMap }} />
  );
};

export default App;
```

### Vanilla JavaScript
```javascript
import { createMap } from "svg-world-maps";

const mapSVG = createMap("world", {
  background: "#f8fafc",
  borders: "#94a3b8",
  hoverColor: "#3b82f6",
  showTooltip: true
});

const container = document.getElementById("map-container");
container.innerHTML = mapSVG;

// Easy click handling via data attributes
container.addEventListener("click", (e) => {
  if (e.target.tagName === "path") {
    const code = e.target.dataset.code; // e.g., "US-CA"
    const name = e.target.dataset.name; // e.g., "California"
    console.log(`Clicked: ${name} (${code})`);
  }
});
```

---

## 🗺️ Adding Optional Maps

To keep your production bundle size minimal, only the `world` map is included by default. The full list of 211+ optional maps now lives in the dedicated [`svg-world-maps-data`](https://github.com/homayounmmdy/svg-world-maps-data) repository and is referenced on demand. This is the main reason the `v1.1.0` npm package is dramatically smaller.

Add any of the 211+ optional maps on-demand using our CLI:

```bash
# Add a specific map (e.g., usa, germany, japan, brazil)
npx add-map usa

# Automatically register it in your codebase (DX booster!)
npx register-map
```

👉 *[See the full list of 212+ available maps in the Documentation](https://svg-world-maps.vercel.app/docs/maps-info)*


## 🏛️ Capital City Markers (New in v1.1.0)

You can now easily overlay capital city markers on any map. This feature is **opt-in** and only loads the necessary capital data when enabled, so your bundle stays lean.

```javascript
import { createMap } from "svg-world-maps";

const mapWithCapitals = createMap("france", {
  capitals: { 
    color : "#ef4444"
  }
});
```

The markers are rendered as small circles at the coordinates of each capital. You can customize their appearance via the options.

---

## 📚 Learn More

The README is just the beginning. For comprehensive guides, API references, and advanced use cases, visit our official documentation:

| Resource | Link |
| :--- | :--- |
| 🚀 **Getting Started** | [Installation & Basic Usage](https://svg-world-maps.vercel.app/docs/getting-started) |
| ⚙️ **API Reference** | [`createMap`, `registerMapData` & Options](https://svg-world-maps.vercel.app/docs/api-reference) |
| 📏 **Size & Scaling** | [Presets and custom scale factors](https://svg-world-maps.vercel.app/docs/api-reference/size-options) |
| 🖱️ **Interactivity** | [Tooltips, Labels, and Click Handling](https://svg-world-maps.vercel.app/docs/api-reference/interactive-features) |
| 📊 **Maps Info Report** | [Real-time status of all 212+ maps](https://svg-world-maps.vercel.app/docs/maps-info) |
| 🔄 **Migration Guide** | [Upgrading to v1.0.0](https://svg-world-maps.vercel.app/docs/migration-guide) |

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. We welcome:
- 🐛 Bug reports and fixes
- 💡 Feature requests
- 🌍 New country/region map additions (please contribute to the [`svg-world-maps-data`](https://github.com/homayounmmdy/svg-world-maps-data) repository)
- 📝 Documentation improvements

Please read our [Code of Conduct](./CODE_OF_CONDUCT.md) before contributing.

---

## 📜 License

This project's code is distributed under the MIT License. See [LICENSE](./LICENSE) for more information.

### 🗺️ Map Data Attribution
Please note that the underlying SVG map data (paths, `viewBox` coordinates, and labels) for specific countries and regions included in this package is sourced from [SimpleMaps](https://simplemaps.com/). 

This map data is used in accordance with the [SimpleMaps SVG Map Library License](https://simplemaps.com/resources/svg-license). The map data itself is **not** covered by the MIT license of this project and remains subject to SimpleMaps' terms of use (free for commercial use, attribution appreciated, and no redistribution "as is" without added value). 

If you use these maps in your own projects, we kindly ask that you acknowledge SimpleMaps.

---

## ❤️ Support

If you find `svg-world-maps` helpful in your project, please consider:
- ⭐ Starring the repository on GitHub
- 🐦 Sharing it with your network
- 📢 Telling your friends and colleagues

**Made with ❤️ for the open-source community by [homayounmmdy](https://github.com/homayounmmdy)**