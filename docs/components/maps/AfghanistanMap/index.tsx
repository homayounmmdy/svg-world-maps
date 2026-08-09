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

    const provinces = [
        { name: "Kabul", code: "AFKAB" }, { name: "Herat", code: "AFHER" },
        { name: "Balkh", code: "AFBAL" }, { name: "Kandahar", code: "AFKAN" },
        { name: "Nangarhar", code: "AFNAN" }, { name: "Badakhshan", code: "AFBDS" },
        { name: "Ghazni", code: "AFGHA" }, { name: "Kunduz", code: "AFKDZ" },
        { name: "Hilmand", code: "AFHEL" }, { name: "Takhar", code: "AFTAK" },
        { name: "Baghlan", code: "AFBGL" }, { name: "Paktika", code: "AFPIA" },
        { name: "Paktya", code: "AFPKA" }, { name: "Khost", code: "AFKHO" },
        { name: "Uruzgan", code: "AFURU" }, { name: "Zabul", code: "AFZAB" },
        { name: "Farah", code: "AFFRA" }, { name: "Nimroz", code: "AFNIM" },
        { name: "Faryab", code: "AFFYB" }, { name: "Jawzjan", code: "AFJOW" },
        { name: "Samangan", code: "AFSAM" }, { name: "Sar-e Pol", code: "AFSAR" },
        { name: "Ghor", code: "AFGHO" }, { name: "Bamyan", code: "AFBAM" },
        { name: "Daykundi", code: "AFDAY" }, { name: "Wardak", code: "AFWAR" },
        { name: "Logar", code: "AFLOG" }, { name: "Parwan", code: "AFPAR" },
        { name: "Kapisa", code: "AFKAP" }, { name: "Panjshir", code: "AFPAN" },
        { name: "Laghman", code: "AFLAG" }, { name: "Kunar", code: "AFKNR" },
        { name: "Nuristan", code: "AFNUR" }, { name: "Badghis", code: "AFBDG" }
    ];

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

            <h3 className={styles.provincesTitle}>The 34 Provinces (Wilayats)</h3>
            <div className={styles.provincesGrid}>
                {provinces.map((p, i) => (
                    <div key={i} className={styles.provinceCard}>
                        <span className={styles.provinceName}>{p.name}</span>
                        <span className={styles.provinceCode}>{p.code}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}