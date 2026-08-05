import { useEffect, useRef, useState } from "react";
import { createMap } from "svg-world-maps";
import styles from "./index.module.css";

export default function MapExplorer() {
  const [selectedRegion, setSelectedRegion] = useState<{
    name: string;
    code: string;
  } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Generate the world map SVG
  const worldMapSvg = createMap("world", {
    background: "var(--ifm-background-color)",
    borders: "var(--ifm-color-emphasis-300)",
    hoverColor: "rgba(102, 126, 234, 0.4)",
    showTooltip: true,
    size: "lg",
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const code = target.dataset.code;
      const name = target.dataset.name;

      // Only trigger if a valid country/region path was clicked
      if (code && name && target.tagName.toLowerCase() === "path") {
        setSelectedRegion({ name, code });
      }
    };

    container.addEventListener("click", handleClick);
    return () => container.removeEventListener("click", handleClick);
  }, []);

  const closeModal = () => setSelectedRegion(null);

  return (
    <div className={styles.explorerContainer}>
      {/* Map Rendering Area */}
      <div
        ref={containerRef}
        className={styles.mapWrapper}
        dangerouslySetInnerHTML={{ __html: worldMapSvg }}
      />

      {/* "Coming Soon" / 404 Modal Overlay */}
      {selectedRegion && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeButton}
              onClick={closeModal}
              aria-label="Close modal"
            >
              &times;
            </button>
            <div className={styles.modalIcon}>🗺️</div>
            <h3 className={styles.modalTitle}>
              {selectedRegion.name} Map Coming Soon!
            </h3>
            <p className={styles.modalDescription}>
              We are actively working on adding high-quality, labeled SVG maps
              for every region. The map for{" "}
              <strong>{selectedRegion.name}</strong> is on our roadmap.
            </p>
            <div className={styles.modalActions}>
              <a
                href={`https://github.com/homayounmmdy/svg-world-maps/issues/new?title=Request:+${encodeURIComponent(selectedRegion.name)}+Map&body=I+would+love+to+see+a+detailed+SVG+map+for+${encodeURIComponent(selectedRegion.name)}+(Code:+${selectedRegion.code}).`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryButton}
              >
                Request This Map on GitHub
              </a>
              <button className={styles.secondaryButton} onClick={closeModal}>
                Continue Exploring
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
