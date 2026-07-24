# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.7.0] - Latest
### 🌍 Added
- **21 New Maps**: Added detailed SVG maps for Africa, Pakistan, Canada, Argentina, Armenia, Austria, Denmark, Finland, Greenland, Iceland, Israel, Kuwait, Lebanon, Luxembourg, Norway, Oman, Poland, Singapore, Sweden, UAE, and Vatican.
- **Map Info Script**: Created a new `map-info` script that automatically generates a `MAPS_INFO.md` report in the root directory, providing a real-time overview of all available map configurations, state counts, and label support.
- **DX Automation**: Added a map creation template and script to automate the map generation process, significantly improving Developer Experience (DX) and making the addition of new maps much faster.
- **Package Scripts**: Registered the map management scripts directly in `package.json` for easier execution.
- **Community Files**: Added `CODE_OF_CONDUCT.md` and `SECURITY.md` to foster a safe and secure open-source community.

### 🐛 Fixed
- **Lowercase SVG Generation**: Fixed an issue where map creation codes/names were not consistently lowercase in the generated SVG output.
- **Multiple Maps Issue**: Resolved a custom issue that occurred when using multiple different maps within a single project.

### ♻️ Refactored
- **JSDocs**: Improved and refactored JSDoc comments for the list of available maps, providing better IDE autocomplete and documentation for developers.

---

## [0.6.0] - Jul 3, 2026
### 🌍 Added
- **New Maps**: Added detailed SVG maps for **Belgium**, **Switzerland**, and the whole of **Europe**.
- **Hover Tooltips**: Added a built-in tooltip feature to show region names on hover.
- **Region Labels (`showLabel`)**: Added the ability to render text labels directly on map regions.
    - *Note*: Currently supported for Afghanistan, Germany, France, Australia, Brazil, India, Great Britain, Netherlands, Switzerland, and Belgium. Not yet supported for Iran, USA, World, and Europe due to OpenStreetMap data limitations.
- **New CLI Tool**: Added `npx register-map` script to automatically register added maps, significantly speeding up the development workflow.

### 🐛 Fixed
- **Map Overwrite Bug**: Resolved a critical bug in the `add-map` script where running the command would accidentally overwrite existing maps.
- **Version Control**: Removed the `dist/` directory from version control to reduce repository size.

### ♻️ Changed
- **Refactoring**: Improved and refactored user logging in the `add-map` script for a cleaner and more informative CLI experience.

---

## [0.5.0] - Apr 25, 2026
### 🌍 Added
- **8 New Country Maps**:
    - 🇩🇪 **Germany** (16 states)
    - 🇮🇳 **India** (28 states + 8 union territories)
    - 🇮🇷 **Iran** (31 provinces)
    - 🇳🇱 **Netherlands** (12 provinces)
    - 🇫🇷 **France** (18 regions)
    - 🇦🇺 **Australia** (6 states + 10 territories)
    - 🇧🇷 **Brazil** (26 states + federal district)
    - 🇬🇧 **Great Britain** (Constituent countries)
- All new maps include complete regional divisions, `data-code` and `data-name` attributes, full hover/click support, customizable colors/borders, and all size presets.

---

## [0.4.0] - Feb 27, 2026
### 🌍 Added
- **USA Map Support**: Added the USA map (50 states + DC) as an optional add-on to keep bundle sizes small.
- **`hoverColor` Option**: Added interactive hover effects to map regions (supports named colors, hex, RGB/RGBA, HSL/HSLA).
- **Interactive Clicks**: Map regions now include `data-code` and `data-name` attributes for easy click handling without complex setup.

### 🐛 Fixed
- Fixed viewport calculation for non-default map sizes.
- Improved error messages for unregistered optional maps.
- Corrected TypeScript types for `MapOptions`.

### ♻️ Changed
- **Migration Note**: The Afghanistan map file path changed from `AF.ts` to `afghanistan.ts`. Users should update their imports and re-run `npx add-map afghanistan`.

---

## [0.2.0] - Feb 26, 2026
### 🌍 Added
- **World Map**: Added a complete world map with all 195 recognized countries.
- **Flexible Sizing**: Introduced 8 preset sizes (`xs` to `4xl`) and custom scale factors for precise control.
- **Unified API**: Replaced individual map functions with a single `createMap(mapType, options)` function.
- **Better Customization**: Introduced intuitive `background` and `borders` props.

### ♻️ Changed
- **Migration from v0.1.0**:
    - Old: `createAfghanistanMap({ fill: "#ff0000", stroke: "#ffffff" })`
    - New: `createMap("afghanistan", { background: "#ff0000", borders: "#ffffff", size: "md" })`

---

## [0.1.0] - Feb 20, 2026
### 🌍 Added
- **Initial Release** 🎉
- **Afghanistan Map**: Complete SVG map with all 34 provinces/states.
- **Customization**: Support for `fill` and `stroke` color customization.
- **Lightweight**: Pure SVG output with no heavy dependencies, designed for easy integration in Vite + React projects.