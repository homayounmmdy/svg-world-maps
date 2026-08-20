import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import KHData from '../../../../src/maps/optional/CAMBODIA';

registerMapData('cambodia', KHData);

export default function CambodiaMap() {
    return (
        <BaseMap 
            mapId="cambodia"
            svgFileName="cambodia.svg"
            hoverColor="rgba(225, 0, 21, 0.35)"
            themeColorRgb="225, 0, 21"
            regionLabel="Province"
        />
    );
}