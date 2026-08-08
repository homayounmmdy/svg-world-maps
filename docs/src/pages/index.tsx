import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import CodeBlock from "@theme/CodeBlock";
import Layout from "@theme/Layout";
import clsx from "clsx";
import { JSX } from "react";
import styles from "./index.module.css";

/* ---------- Data ---------- */

type Feature = {
  title: string;
  emoji: string;
  description: JSX.Element;
  gradient: string;
};

const features: Feature[] = [
  {
    title: "Massive Map Library",
    emoji: "🌍",
    description: (
      <>
        35+ SVG maps out of the box — World, USA, Germany, India, Brazil,
        Europe, Canada, and many more. All lightweight, pure SVG output.
      </>
    ),
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    title: "Interactive & Clickable",
    emoji: "👆",
    description: (
      <>
        Built-in hover tooltips, region labels, and click support via{" "}
        <code>data-code</code> and <code>data-name</code> attributes.
      </>
    ),
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    title: "Framework Agnostic",
    emoji: "⚡",
    description: (
      <>
        Works seamlessly with React, Vue, Svelte, Vanilla JS, and more. Full
        TypeScript support with zero runtime dependencies.
      </>
    ),
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },
  {
    title: "Fully Customizable",
    emoji: "🎨",
    description: (
      <>
        Control every visual — background, borders, hover colors, tooltips,
        labels, and 8 preset sizes or a custom scale factor.
      </>
    ),
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  },
  {
    title: "Tiny Bundles",
    emoji: "📦",
    description: (
      <>
        Add only the maps you need via <code>npx add-map</code>. Keep your
        bundle small and lean — no bloat.
      </>
    ),
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
  },
  {
    title: "One Simple API",
    emoji: "🔧",
    description: (
      <>
        One function to rule them all — <code>createMap()</code>. That's it.
        Generate stunning maps with a single call.
      </>
    ),
    gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
  },
];

/* ---------- Components ---------- */

function HeroBanner() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroBackground}>
        <div className={styles.heroOrb} />
        <div className={clsx(styles.heroOrb, styles.heroOrb2)} />
        <div className={clsx(styles.heroOrb, styles.heroOrb3)} />
      </div>

      <div className="container">
        <div className={styles.heroBadge}>
          <span className={styles.pulse} />
          <span>🎉 v0.7.0 — 21 new maps available!</span>
        </div>

        <h1 className={styles.heroTitle}>
          Beautiful SVG World Maps
          <br />
          <span className={styles.gradientText}>for JavaScript projects</span>
        </h1>

        <p className={styles.heroSubtitle}>
          Simple, lightweight, and interactive SVG maps with tooltips, labels,
          hover effects, and click support. Zero dependencies. Fully typed.
          Works everywhere.
        </p>

        <div className={styles.heroCtas}>
          <Link
            className={clsx(
              "button button--primary button--lg",
              styles.primaryBtn,
            )}
            to="/docs/getting-started"
          >
            🚀 Get Started
          </Link>
          <Link
            className={clsx(
              "button button--secondary button--lg",
              styles.secondaryBtn,
            )}
            to="https://github.com/homayounmmdy/svg-world-maps"
          >
            ⭐ Star on GitHub
          </Link>
        </div>
        <div className={styles.heroBottomCTA}>
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>35+</div>
              <div className={styles.statLabel}>Maps</div>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <div className={styles.statNumber}>0</div>
              <div className={styles.statLabel}>Dependencies</div>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>TypeScript</div>
            </div>
          </div>
          <div className={styles.installBox}>
            <code className={styles.installCode}>
              <span className={styles.installDollar}>$</span> npm install
              svg-world-maps@0.7.0
            </code>
          </div>
        </div>
      </div>
    </header>
  );
}

function FeatureCard({ title, emoji, description, gradient }: Feature) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureIconWrap} style={{ background: gradient }}>
        <span className={styles.featureIcon}>{emoji}</span>
      </div>
      <div className={styles.featureContent}>
        <h3 className={styles.featureTitle}>{title}</h3>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

function FeaturesSection() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Everything you need. Nothing you don't.
          </h2>
          <p className={styles.sectionSubtitle}>
            A batteries-included SVG map library designed for modern web
            development.
          </p>
        </div>
        <div className={styles.featureGrid}>
          {features.map((props, idx) => (
            <FeatureCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DemoSection() {
  return (
    <section className={styles.demo}>
      <div className="container">
        <div className={styles.demoGrid}>
          <div className={styles.demoText}>
            <span className={styles.demoBadge}>Quick Start</span>
            <h2 className={styles.demoTitle}>
              Build interactive maps in seconds.
            </h2>
            <p className={styles.demoDescription}>
              One function call. A handful of options. Instant beautiful SVG
              maps with tooltips, labels, hover effects, and click handling —
              ready to drop into any project.
            </p>
            <ul className={styles.demoList}>
              <li>✅ Tooltips & labels built-in</li>
              <li>✅ Click handlers via data attributes</li>
              <li>✅ 8 preset sizes + custom scaling</li>
              <li>✅ Full TypeScript support</li>
            </ul>
          </div>
          <div className={styles.demoCode}>
            <CodeBlock language="typescript" title="app.tsx" showLineNumbers>
              {`import { createMap } from "svg-world-maps";

const map = createMap("world", {
  background: "#e6f3ff",
  borders: "#2c3e50",
  hoverColor: "rgba(59, 130, 246, 0.3)",
  tooltip: true,
  showLabel: true,
  size: "lg",
});

// Drop into React, Vue, Svelte, or vanilla JS!
document.getElementById("map")!.innerHTML = map;`}
            </CodeBlock>
          </div>
        </div>
      </div>
    </section>
  );
}

function MapsSection() {
  const maps = [
    { name: "World", emoji: "🌍", states: "195 countries" },
    { name: "USA", emoji: "🇺🇸", states: "51 states" },
    { name: "Germany", emoji: "🇩🇪", states: "16 states" },
    { name: "India", emoji: "🇮🇳", states: "36 states" },
    { name: "Brazil", emoji: "🇧🇷", states: "27 states" },
    { name: "Canada", emoji: "🇨🇦", states: "13 provinces" },
    { name: "France", emoji: "🇫🇷", states: "13 regions" },
    { name: "Australia", emoji: "🇦🇺", states: "8 states" },
  ];

  return (
    <section className={styles.maps}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Explore 35+ Maps</h2>
          <p className={styles.sectionSubtitle}>
            From the whole world to specific countries — add only the maps you
            need.
          </p>
        </div>
        <div className={styles.mapGrid}>
          {maps.map((map, idx) => (
            <div key={idx} className={styles.mapCard}>
              <div className={styles.mapEmoji}>{map.emoji}</div>
              <div className={styles.mapName}>{map.name}</div>
              <div className={styles.mapStates}>{map.states}</div>
            </div>
          ))}
          <div className={clsx(styles.mapCard, styles.mapCardMore)}>
            <div className={styles.mapEmoji}>🗺️</div>
            <div className={styles.mapName}>+ 27 more</div>
            {/* <Link to="/docs/maps-list" className={styles.mapLink}>
              View all maps →
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className={styles.cta}>
      <div className={styles.ctaBackground} />
      <div className="container">
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to build amazing maps?</h2>
          <p className={styles.ctaDescription}>
            Get started in less than a minute. Open source, MIT licensed, and
            loved by developers worldwide.
          </p>
          <div className={styles.heroCtas}>
            <Link
              className={clsx(
                "button button--primary button--lg",
                styles.primaryBtn,
              )}
              to="/docs/getting-started"
            >
              Read the Docs
            </Link>
            <Link
              className={clsx(
                "button button--secondary button--lg",
                styles.secondaryBtnLight,
              )}
              to="https://www.npmjs.com/package/svg-world-maps"
            >
              View on npm
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Page ---------- */

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} — SVG World Maps`}
      description="Simple, lightweight SVG maps for JavaScript projects. 35+ maps with tooltips, labels, hover effects, and click support."
    >
      <HeroBanner />
      <main>
        <FeaturesSection />
        <DemoSection />
        <MapsSection />
        <CTASection />
      </main>
    </Layout>
  );
}
