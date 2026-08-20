import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import NAData from '../../../../src/maps/optional/NAMIBIA';

registerMapData('namibia', NAData);

export default function NamibiaMap() {
    return (
        <BaseMap 
            mapId="namibia"
            svgFileName="namibia.svg"
            hoverColor="rgba(0, 56, 168, 0.35)"
            themeColorRgb="0, 56, 168"
            regionLabel="Region"
        />
    );
}