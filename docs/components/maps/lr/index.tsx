import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import LRData from '../../../../src/maps/optional/LIBERIA';

registerMapData('liberia', LRData);

export default function LiberiaMap() {
    return (
        <BaseMap 
            mapId="liberia"
            svgFileName="liberia.svg"
            hoverColor="rgba(191, 10, 48, 0.35)"
            themeColorRgb="191, 10, 48"
            regionLabel="County"
        />
    );
}