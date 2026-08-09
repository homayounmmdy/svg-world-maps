import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import CodeBlock from "@theme/CodeBlock";
import Layout from "@theme/Layout";
import clsx from "clsx";
import { useState, useEffect, JSX } from "react";
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
    gradient: "linear-gradient(135deg, #0f172a 0%, #1e40af 100%)",
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
    gradient: "linear-gradient(135deg, #0f172a 0%, #0891b2 100%)",
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
    gradient: "linear-gradient(135deg, #0f172a 0%, #7c3aed 100%)",
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
    gradient: "linear-gradient(135deg, #0f172a 0%, #059669 100%)",
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
    gradient: "linear-gradient(135deg, #0f172a 0%, #d97706 100%)",
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
    gradient: "linear-gradient(135deg, #0f172a 0%, #dc2626 100%)",
  },
];

/* ---------- Components ---------- */

interface HeroProps {
  mousePos: { x: number; y: number };
  copied: boolean;
  onCopy: () => void;
}

function HeroBanner({ mousePos, copied, onCopy }: HeroProps) {
  const { siteConfig } = useDocusaurusContext();
  return (
      <header className={styles.heroBanner}>
        {/* Global Cursor Glow */}
        <div
            className={styles.heroCursorGlow}
            style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
        />

        <div className={styles.heroBackground}>
          <div className={styles.heroOrb} />
          <div className={clsx(styles.heroOrb, styles.heroOrb2)} />
          <div className={clsx(styles.heroOrb, styles.heroOrb3)} />
        </div>

        <div className="container">
          <div className={clsx(styles.heroBadge, styles.revealElement)}>
            <span className={styles.pulse} />
            <span>🎉 v0.7.0 — 21 new maps available!</span>
          </div>

          <h1 className={clsx(styles.heroTitle, styles.revealElement)}>
            Beautiful SVG World Maps
            <br />
            <span className={styles.gradientText}>for JavaScript projects</span>
          </h1>

          <p className={clsx(styles.heroSubtitle, styles.revealElement)}>
            Simple, lightweight, and interactive SVG maps with tooltips, labels,
            hover effects, and click support. Zero dependencies. Fully typed.
            Works everywhere.
          </p>

          <div className={clsx(styles.heroCtas, styles.revealElement)}>
            <Link
                className={clsx("button button--primary button--lg", styles.primaryBtn)}
                to="/docs/getting-started"
            >
              🚀 Get Started
            </Link>
            <Link
                className={clsx("button button--secondary button--lg", styles.secondaryBtn)}
                to="https://github.com/homayounmmdy/svg-world-maps"
            >
              ⭐ Star on GitHub
            </Link>
          </div>

          <div className={clsx(styles.heroBottomCTA, styles.revealElement)}>
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
                <span className={styles.installDollar}>$</span> npm install svg-world-maps@0.7.0
              </code>
              <button className={styles.copyBtn} onClick={onCopy} aria-label="Copy to clipboard">
                {copied ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
  );
}

interface FeatureCardProps extends Feature {
  onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
}

function FeatureCard({ title, emoji, description, gradient, onMouseMove }: FeatureCardProps) {
  return (
      <div className={clsx(styles.featureCard, styles.revealElement)} onMouseMove={onMouseMove}>
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

function FeaturesSection({ onMouseMove }: { onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void }) {
  return (
      <section className={styles.features}>
        <div className="container">
          <div className={clsx(styles.sectionHeader, styles.revealElement)}>
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
                <FeatureCard key={idx} {...props} onMouseMove={onMouseMove} />
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
            <div className={clsx(styles.demoText, styles.revealElement)}>
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
            <div className={clsx(styles.demoCode, styles.revealElement)}>
              <CodeBlock language="typescript" title="app.tsx" showLineNumbers>
                {`import { createMap } from "svg-world-maps";

const map = createMap("world", {
  background: "#e6f3ff",
  borders: "#2c3e50",
  hoverColor: "rgba(6, 182, 212, 0.3)",
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
          <div className={clsx(styles.sectionHeader, styles.revealElement)}>
            <h2 className={styles.sectionTitle}>Explore 35+ Maps</h2>
            <p className={styles.sectionSubtitle}>
              From the whole world to specific countries — add only the maps you
              need.
            </p>
          </div>
          <div className={styles.mapGrid}>
            {maps.map((map, idx) => (
                <div key={idx} className={clsx(styles.mapCard, styles.revealElement)}>
                  <div className={styles.mapEmoji}>{map.emoji}</div>
                  <div className={styles.mapName}>{map.name}</div>
                  <div className={styles.mapStates}>{map.states}</div>
                </div>
            ))}
            <div className={clsx(styles.mapCard, styles.mapCardMore, styles.revealElement)}>
              <div className={styles.mapEmoji}>🗺️</div>
              <div className={styles.mapName}>+ 27 more</div>
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
          <div className={clsx(styles.ctaContent, styles.revealElement)}>
            <h2 className={styles.ctaTitle}>Ready to build amazing maps?</h2>
            <p className={styles.ctaDescription}>
              Get started in less than a minute. Open source, MIT licensed, and
              loved by developers worldwide.
            </p>
            <div className={styles.heroCtas}>
              <Link
                  className={clsx("button button--primary button--lg", styles.primaryBtn)}
                  to="/docs/getting-started"
              >
                Read the Docs
              </Link>
              <Link
                  className={clsx("button button--secondary button--lg", styles.secondaryBtnLight)}
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
  const [copied, setCopied] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // 1. Scroll Reveal Animation Observer
    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(styles.revealVisible);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll(`.${styles.revealElement}`);
    elements.forEach((el) => observer.observe(el));

    // 2. Global Cursor Glow Tracker
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("npm install svg-world-maps@0.7.0");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
      <Layout
          title={`${siteConfig.title} — SVG World Maps`}
          description="Simple, lightweight SVG maps for JavaScript projects. 35+ maps with tooltips, labels, hover effects, and click support."
      >
        <HeroBanner mousePos={mousePos} copied={copied} onCopy={handleCopy} />
        <main>
          <FeaturesSection onMouseMove={handleCardMouseMove} />
          <DemoSection />
          <MapsSection />
          <CTASection />
        </main>
      </Layout>
  );
}