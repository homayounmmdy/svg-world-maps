import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import LCData from '../../../../src/maps/optional/SAINT_LUCIA';

registerMapData('saint-lucia', LCData);

export default function SaintLuciaMap() {
    return (
        <BaseMap 
            mapId="saint-lucia"
            svgFileName="saint-lucia.svg"
            hoverColor="rgba(0, 51, 160, 0.35)"
            themeColorRgb="0, 51, 160"
            regionLabel="Quarter"
        />
    );
}