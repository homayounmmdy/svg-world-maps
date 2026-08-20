import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import TCData from '../../../../src/maps/optional/TURKS_AND_CAICOS_ISLANDS';

registerMapData('turksandcaicosislands', TCData);

export default function TurksandcaicosislandsMap() {
    return (
        <BaseMap 
            mapId="turksandcaicosislands"
            svgFileName="turksandcaicosislands.svg"
            hoverColor="rgba(0, 51, 160, 0.35)"
            themeColorRgb="0, 51, 160"
            regionLabel="District"
        />
    );
}