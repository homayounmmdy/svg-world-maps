import { useHistory } from "@docusaurus/router"; // Docusaurus routing hook
import { useEffect, useRef, useState } from "react";
import { createMap } from "svg-world-maps";
import styles from "./index.module.css";

export default function MapExplorer() {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const history = useHistory(); // Initialize Docusaurus router

  // Generate the world map SVG with modern Deep Navy theme colors
  const worldMapSvg = createMap("world", {
    background: "transparent", // Let container handle bg
    borders: "#4f5357",
    hoverColor: "rgba(6, 182, 212, 0.3)", // Cyan glow
    showLabels: true,
    size: "md",
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Simulate a brief loading state for smooth entrance
    setTimeout(() => setIsLoading(false), 300);

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const code = target.dataset.code;
      const name = target.dataset.name;

      // Only trigger if a valid country/region path was clicked
      if (code && name && target.tagName.toLowerCase() === "path") {
        // Convert name to a URL-friendly slug (e.g., "New Zealand" -> "new-zealand")
        const slug = name.toLowerCase().replace(/\s+/g, "-");

        // Redirect to the specific country map page using Docusaurus router
        history.push(`/docs/maps/${slug}`);
      }
    };

    container.addEventListener("click", handleClick);
    return () => container.removeEventListener("click", handleClick);
  }, [history]);

  return (
    <div className={styles.explorerContainer}>
      {/* Terminal Style Header */}
      <div className={styles.explorerHeader}>
        <div className={styles.windowControls}>
          <span className={styles.dotRed}></span>
          <span className={styles.dotYellow}></span>
          <span className={styles.dotGreen}></span>
        </div>
        <span className={styles.explorerTitle}>svg-world-maps / world.svg</span>
      </div>

      {/* Map Rendering Area */}
      <div
        ref={containerRef}
        className={`${styles.mapWrapper} ${!isLoading ? styles.mapLoaded : ""}`}
        dangerouslySetInnerHTML={{ __html: worldMapSvg }}
      />
    </div>
  );
}
