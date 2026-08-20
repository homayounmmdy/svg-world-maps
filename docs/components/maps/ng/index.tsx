import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import NGData from '../../../../src/maps/optional/NIGERIA';

registerMapData('nigeria', NGData);

export default function NigeriaMap() {
    return (
        <BaseMap 
            mapId="nigeria"
            svgFileName="nigeria.svg"
            hoverColor="rgba(0, 135, 81, 0.35)"
            themeColorRgb="0, 135, 81"
            regionLabel="State"
        />
    );
}