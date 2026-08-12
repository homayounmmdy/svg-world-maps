import { useEffect, useRef, useState } from "react";
import { createMap, registerMapData } from "svg-world-maps";
import usaData from "../../../../src/maps/optional/USA";
import styles from "./styles.module.css";

// Register the USA map data (viewBox: 0 0 1000 589)
registerMapData("usa", usaData);

export default function UnitedStatesMap() {
  const [selected, setSelected] = useState<{
    code: string;
    name: string;
  } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // US Flag Red hover, Deep Navy borders
  const svgString = createMap("usa", {
    background: "transparent",
    borders: "#1e293b",
    hoverColor: "rgba(179, 25, 46, 0.35)", // Old Glory Red
    showTooltip: true,
    size: "md",
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleClick = (e: React.MouseEvent) => {
      const target = e.target as HTMLElement;
      const code = target.dataset.code;
      const name = target.dataset.name;
      if (code && name && target.tagName.toLowerCase() === "path") {
        setSelected({ code, name });
      }
    };

    container.addEventListener("click", handleClick);
    return () => container.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.terminalHeader}>
        <div className={styles.windowControls}>
          <span className={styles.dotRed}></span>
          <span className={styles.dotYellow}></span>
          <span className={styles.dotGreen}></span>
        </div>
        <span className={styles.explorerTitle}>svg-world-maps / usa.svg</span>
      </div>

      <div
        ref={containerRef}
        className={styles.mapWrapper}
        dangerouslySetInnerHTML={{ __html: svgString }}
      />

      {selected && (
        <div className={styles.selectionInfo}>
          <strong>Selected State:</strong> {selected.name}
          <span className={styles.codeBadge}>({selected.code})</span>
        </div>
      )}
    </div>
  );
}
