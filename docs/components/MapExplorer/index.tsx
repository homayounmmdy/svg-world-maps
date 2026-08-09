import { useEffect, useRef, useState } from "react";
import { createMap } from "svg-world-maps";
import styles from "./index.module.css";

export default function MapExplorer() {
  const [selectedRegion, setSelectedRegion] = useState<{
    name: string;
    code: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Generate the world map SVG with modern Deep Navy theme colors
  const worldMapSvg = createMap("world", {
    background: "transparent", // Let container handle bg
    borders: "#1e293b",
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
        setSelectedRegion({ name, code });
      }
    };

    container.addEventListener("click", handleClick);
    return () => container.removeEventListener("click", handleClick);
  }, []);

  const closeModal = () => setSelectedRegion(null);

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

        {/* "Coming Soon" Modal Overlay */}
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
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>

                <div className={styles.modalGlow} />

                <div className={styles.modalIcon}>🗺️</div>
                <h3 className={styles.modalTitle}>
                  {selectedRegion.name}  <div className={styles.modalBadge}>
                  {selectedRegion.code}
                </div>
                </h3>

                <p className={styles.modalDescription}>
                  This specific map is currently on our roadmap!
                </p>
                <div className={styles.modalActions}>
                  <a
                      href={`https://github.com/homayounmmdy/svg-world-maps/issues/new?title=Request:+${encodeURIComponent(selectedRegion.name)}+Map&body=I+would+love+to+see+a+detailed+SVG+map+for+${encodeURIComponent(selectedRegion.name)}+(Code:+${selectedRegion.code}).`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.primaryButton}
                  >
                    Request on GitHub
                  </a>
                  <button className={styles.secondaryButton} onClick={closeModal}>
                    Keep Exploring
                  </button>
                </div>
              </div>
            </div>
        )}
      </div>
  );
}