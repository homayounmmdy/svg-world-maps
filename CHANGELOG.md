# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - latest
### 🎉 Major Milestone
- **v1.0.0 Stable Release**: We are thrilled to announce the first major stable release of `svg-world-maps`! This release represents a complete, production-ready, and fully documented mapping solution.

### 🌍 Added
- **88 New Maps (Global Coverage Complete)**: Massive expansion bringing the total library to **212+ maps**! New additions include: Bangladesh, Ethiopia, Tanzania, Kenya, Uganda, Yemen, Morocco, Ghana, Mozambique, Madagascar, Côte d'Ivoire, Nepal, Venezuela, Niger, Taiwan, Burkina Faso, Sri Lanka, Malawi, Zambia, Somalia, Guatemala, Zimbabwe, Guinea, Rwanda, Burundi, Tunisia, Haiti, Dominican Republic, Cuba, Honduras, Papua New Guinea, Sierra Leone, Togo, Hong Kong, El Salvador, Republic of Congo, Liberia, Ireland, Costa Rica, Palestine, Eritrea, Puerto Rico, Jamaica, Lithuania, Qatar, The Gambia, Moldova, Gabon, Lesotho, Guinea-Bissau, Latvia, Equatorial Guinea, Timor-Leste, Trinidad and Tobago, Estonia, Mauritius, Swaziland (Eswatini), Comoros, Guyana, Solomon Islands, Suriname, Western Sahara, Malta, Maldives, Bahamas, Vanuatu, New Caledonia, French Polynesia, São Tomé and Príncipe, Saint Lucia, Curaçao, Seychelles, Grenada, United States Virgin Islands, Tonga, Saint Vincent and the Grenadines, Cayman Islands, Dominica, Faroe Islands, Saint Kitts and Nevis, Turks and Caicos Islands, Sint Maarten (Dutch), Liechtenstein, Saint Martin (French), Nauru, Montserrat, Falkland Islands, and Pitcairn Islands.

### 📚 Documentation
- **Complete Docs Overhaul**: Migrated from GitHub Wiki to a dedicated, auto-generated documentation site (Docsourcos) at [svg-world-maps.vercel.app](https://svg-world-maps.vercel.app/).
- **API References**: Added comprehensive, type-safe documentation for `createMap`, `registerMapData`, sizing options, and interactive features.
- **Script Documentation**: Added detailed guides for all internal DX scripts (`add-map`, `register-map`, `generate-map`, `generate-report`).
- **Map Explorer Links**: Added direct links from the interactive Map Explorer to the specific documentation page for each map.
- **Migration Guide**: Added a dedicated, step-by-step migration guide for upgrading between versions.
- **UI Polish**: Updated the documentation Hero section for a better first impression.

### ♻️ Refactored
- **Core Architecture**: Deeply refactored `config.ts` and `types.ts` for better maintainability, stricter TypeScript enforcement, improved IDE autocomplete, and optimal tree-shaking.

### 🐛 Fixed
- **Documentation Rendering**: Fixed map color rendering issues in the documentation site.
- **Map Explorer**: Fixed the border color display in the documentation's Map Explorer component.

---

## [0.8.0] - 2026-08-14
### 🌍 Added
- **89 New Maps**: Massive expansion of our map library! Added detailed SVG maps for Albania, Algeria, Andorra, Angola, Anguilla, Antigua and Barbuda, Aruba, Azerbaijan, Bahrain, Barbados, Belarus, Belize, Benin, Bermuda, Bhutan, Bolivia, Bosnia and Herzegovina, Botswana, British Virgin Islands, Brunei, Bulgaria, Cambodia, Cameroon, Cape Verde, Central African Republic, Chad, Chile, China, Colombia, Croatia, Cyprus, Czech Republic, Democratic Republic of the Congo, Djibouti, Ecuador, Egypt, Fiji, Georgia, Greece, Hungary, Indonesia, Iraq, Italy, Japan, Jordan, Kazakhstan, Kyrgyzstan, Laos, Libya, Macedonia, Malaysia, Mali, Mauritania, Mexico, Monaco, Mongolia, Montenegro, Myanmar, Namibia, New Zealand, Nicaragua, Nigeria, North Korea, Panama, Paraguay, Peru, Philippines, Portugal, Romania, Russia, Saudi Arabia, Senegal, Serbia, Slovakia, Slovenia, South Africa, South Korea, South Sudan, Spain, Sudan, Syria, Tajikistan, Thailand, Turkey, Turkmenistan, Ukraine, Uruguay, Uzbekistan, and Vietnam.
- **Docsourcos Integration**: Integrated Docsourcos to automatically generate the initial documentation structure. 
  - *Note*: The documentation framework is now in place, though many feature-specific pages were initially placeholders and have now been fully fleshed out in v1.0.0.

### 🐛 Fixed
- **World Map Accuracy**: Fixed missing and broken regions for **Italy** and **Malaysia** on the main World map.

### 🎯 Release Focus
- This release primarily focused on massively scaling our SVG map library (bringing the total to 124 maps at the time) and establishing our new Docsourcos documentation pipeline.

---

## [0.7.0] - 2026-07-24
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

## [0.6.0] - 2026-07-03
### 🌍 Added
- **New Maps**: Added detailed SVG maps for **Belgium**, **Switzerland**, and the whole of **Europe**.
- **Hover Tooltips**: Added a built-in tooltip feature to show region names on hover.
- **Region Labels (`showLabels`)**: Added the ability to render text labels directly on map regions.
- **New CLI Tool**: Added `npx register-map` script to automatically register added maps, significantly speeding up the development workflow.

### 🐛 Fixed
- **Map Overwrite Bug**: Resolved a critical bug in the `add-map` script where running the command would accidentally overwrite existing maps.
- **Version Control**: Removed the `dist/` directory from version control to reduce repository size.

### ♻️ Changed
- **Refactoring**: Improved and refactored user logging in the `add-map` script for a cleaner and more informative CLI experience.

---

## [0.5.0] - 2026-04-25
### 🌍 Added
- **8 New Country Maps**:
    - 🇩🇪 **Germany** (16 states)
    - 🇮🇳 **India** (36 states/territories)
    - 🇮🇷 **Iran** (31 provinces)
    - 🇳🇱 **Netherlands** (12 provinces)
    - 🇫🇷 **France** (18 regions)
    - 🇦🇺 **Australia** (8 states/territories)
    - 🇧🇷 **Brazil** (27 states)
    - 🇬🇧 **Great Britain** (232 regions)
- All new maps include complete regional divisions, `data-code` and `data-name` attributes, full hover/click support, customizable colors/borders, and all size presets.

---

## [0.4.0] - 2026-02-27
### 🌍 Added
- **USA Map Support**: Added the USA map (51 states/regions) as an optional add-on to keep bundle sizes small.
- **`hoverColor` Option**: Added interactive hover effects to map regions (supports named colors, hex, RGB/RGBA, HSL/HSLA).
- **Interactive Clicks**: Map regions now include `data-code` and `data-name` attributes for easy click handling without complex setup.

### 🐛 Fixed
- Fixed viewport calculation for non-default map sizes.
- Improved error messages for unregistered optional maps.
- Corrected TypeScript types for `MapOptions`.

### ♻️ Changed
- **Migration Note**: The Afghanistan map file path changed from `AF.ts` to `afghanistan.ts`. Users should update their imports and re-run `npx add-map afghanistan`.

---

## [0.2.0] - 2026-02-26
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

## [0.1.0] - 2026-02-20
### 🌍 Added
- **Initial Release** 🎉
- **Afghanistan Map**: Complete SVG map with all 34 provinces/states.
- **Customization**: Support for `fill` and `stroke` color customization.
- **Lightweight**: Pure SVG output with no heavy dependencies, designed for easy integration in Vite + React projects.