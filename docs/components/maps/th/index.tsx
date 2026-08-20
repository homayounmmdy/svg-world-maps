import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import THData from '../../../../src/maps/optional/THAILAND';

registerMapData('thailand', THData);

export default function ThailandMap() {
    return (
        <BaseMap 
            mapId="thailand"
            svgFileName="thailand.svg"
            hoverColor="rgba(165, 25, 45, 0.35)"
            themeColorRgb="165, 25, 45"
            regionLabel="Province"
        />
    );
}