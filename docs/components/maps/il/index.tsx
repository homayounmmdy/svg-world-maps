import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import ILData from '../../../../src/maps/optional/ISRAEL';

registerMapData('israel', ILData);

export default function IsraelMap() {
    return (
        <BaseMap 
            mapId="israel"
            svgFileName="israel.svg"
            hoverColor="rgba(0, 56, 184, 0.35)"
            themeColorRgb="0, 56, 184"
            regionLabel="District"
        />
    );
}