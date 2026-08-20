# svg-world-maps

[![npm version](https://badge.fury.io/js/svg-world-maps.svg)](https://www.npmjs.com/package/svg-world-maps)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm downloads](https://img.shields.io/npm/dt/svg-world-maps.svg)](https://www.npmjs.com/package/svg-world-maps)

Simple, lightweight, and highly customizable SVG maps for modern JavaScript projects.

<img width="1664" height="928" alt="svg-world-maps preview" src="https://github.com/user-attachments/assets/4ef39455-47e4-4d96-aa64-a69097874837" />

> 📚 **Full Documentation**: [svg-world-maps.vercel.app](https://svg-world-maps.vercel.app/)  
> 💬 **Community**: [Discussions](https://github.com/homayounmmdy/svg-world-maps/discussions) • [Issues](https://github.com/homayounmmdy/svg-world-maps/issues)

---

## 🎉 Welcome to v1.0.0!

We are thrilled to announce the **v1.0.0** stable release! This major milestone brings:
- 🌍 **212+ Maps**: World map + 211 country and region maps (USA, China, Japan, Germany, Iran, Brazil, and many more!).
- ⚡ **Zero Dependencies**: Pure, lightweight SVG output.
- 🛠 **Framework Agnostic**: Works flawlessly with React, Next.js, Vue, Svelte, Angular, or Vanilla JS.
- 📦 **Tree-shakeable**: Keep your bundle tiny by only adding the specific maps you need.
- 🖱️ **Interactive**: Built-in hover effects, native tooltips, static labels, and click handling via data attributes.
- 🛡️ **TypeScript Ready**: Full, strict type definitions included out of the box.

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

To keep your production bundle size minimal, only the `world` map is included by default. Add any of the 211+ optional maps on-demand using our CLI:

```bash
# Add a specific map (e.g., usa, germany, japan, brazil)
npx add-map usa

# Automatically register it in your codebase (DX booster!)
npx register-map
```
👉 *[See the full list of 212+ available maps in the Documentation](https://svg-world-maps.vercel.app/docs/maps-info)*

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
- 🌍 New country/region map additions
- 📝 Documentation improvements

Please read our [Code of Conduct](./CODE_OF_CONDUCT.md) before contributing.

---

## 📜 License

Distributed under the MIT License. See [LICENSE](./LICENSE) for more information.

---

## ❤️ Support

If you find `svg-world-maps` helpful in your project, please consider:
- ⭐ Starring the repository on GitHub
- 🐦 Sharing it with your network
- 📢 Telling your friends and colleagues

**Made with ❤️ for the open-source community by [homayounmmdy](https://github.com/homayounmmdy)**