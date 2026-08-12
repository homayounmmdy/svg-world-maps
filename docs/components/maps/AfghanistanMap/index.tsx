import { useEffect, useRef, useState } from "react";
import {createMap, registerMapData} from "svg-world-maps";
import styles from "./styles.module.css";
import afghanistanData from '../../../../src/maps/optional/AFGHANISTAN';

registerMapData('afghanistan', afghanistanData);
export default function AfghanistanMap() {
    const [selected, setSelected] = useState<{ code: string; name: string } | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Afghan Flag Green hover, Deep Navy borders
    const svgString = createMap("afghanistan", {
        background: "transparent",
        borders: "#1e293b",
        hoverColor: "rgba(0, 153, 51, 0.35)",
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

    return (
        <div className={styles.container}>
            <div className={styles.terminalHeader}>
                <div className={styles.windowControls}>
                    <span className={styles.dotRed}></span>
                    <span className={styles.dotYellow}></span>
                    <span className={styles.dotGreen}></span>
                </div>
                <span className={styles.explorerTitle}>svg-world-maps / afghanistan.svg</span>
            </div>

            <div
                ref={containerRef}
                className={styles.mapWrapper}
                dangerouslySetInnerHTML={{ __html: svgString }}
            />

            {selected && (
                <div className={styles.selectionInfo}>
                    <strong>Selected Province:</strong> {selected.name}
                    <span className={styles.codeBadge}>({selected.code})</span>
                </div>
            )}
        </div>
    );
}