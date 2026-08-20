# 📚 Documentation Website for `svg-world-maps`

This directory contains the source code for the official documentation website of **`svg-world-maps`**, built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

> 📍 **Location**: This website is located in the `/docs` folder of the main `svg-world-maps` repository.

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `>=20.0` (as specified in the project's `engines` field)
- **Package Manager**: `npm`, `yarn`, `pnpm`, or `bun`

### Installation

Navigate to the `/docs` directory and install the dependencies:

```bash
npm install
```

---

## 💻 Local Development

Start the local development server:

```bash
npm run start
```

This command starts a local development server and opens a browser window (usually at `http://localhost:3000`). Most content changes are reflected live via hot module replacement (HMR) without needing to restart the server.

---

## 📦 Build

Generate static content for production:

```bash
npm run build
```

This command generates optimized static content into the `build` directory. This output can be served using any static hosting service (like Vercel, Netlify, or GitHub Pages).

To preview the production build locally, run:
```bash
npm run serve
```

---


## 🛠️ Useful Scripts

| Command | Description |
| :--- | :--- |
| `npm run start` | Starts the local development server with hot reloading. |
| `npm run build` | Builds the static site for production. |
| `npm run serve` | Serves the built static site locally for testing. |
| `npm run clear` | Clears the Docusaurus cache and generated files (useful for troubleshooting). |
| `npm run swizzle` | Ejects a Docusaurus theme component for deep customization. |
| `npm run typecheck` | Runs TypeScript type checking on the documentation codebase. |

---

*For more information on contributing to the documentation or adding new pages, please refer to the main repository's [Contributing Guidelines](../CONTRIBUTING.md).*