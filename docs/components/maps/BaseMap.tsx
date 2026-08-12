import { useEffect, useRef, useState, CSSProperties } from "react";
import { createMap } from "svg-world-maps";
import styles from "./shared.module.css";

interface BaseMapProps {
    mapId: string;
    svgFileName: string;
    hoverColor: string;
    themeColorRgb: string; // e.g. "0, 153, 51"
    regionLabel: string;   // e.g. "Province" or "State"
}

export default function BaseMap({ 
    mapId, 
    svgFileName, 
    hoverColor, 
    themeColorRgb,
    regionLabel 
}: BaseMapProps) {
    const [selected, setSelected] = useState<{ code: string; name: string } | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const svgString = createMap(mapId, {
        background: "transparent",
        borders: "#1e293b",
        hoverColor: hoverColor,
        showTooltip: true,
        size: "xl",
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

    // Inject the dynamic theme color into the CSS variables
    const containerStyle: CSSProperties = {
        '--theme-color': themeColorRgb
    } as CSSProperties;

    return (
        <div className={styles.container} style={containerStyle}>
            <div className={styles.terminalHeader}>
                <div className={styles.windowControls}>
                    <span className={styles.dotRed}></span>
                    <span className={styles.dotYellow}></span>
                    <span className={styles.dotGreen}></span>
                </div>
                <span className={styles.explorerTitle}>svg-world-maps / {svgFileName}</span>
            </div>

            <div
                ref={containerRef}
                className={styles.mapWrapper}
                dangerouslySetInnerHTML={{ __html: svgString }}
            />

            {selected && (
                <div className={styles.selectionInfo}>
                    <strong>Selected {regionLabel}:</strong> {selected.name}
                    <span className={styles.codeBadge}>({selected.code})</span>
                </div>
            )}
        </div>
    );
}