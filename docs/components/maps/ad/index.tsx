import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import ADData from '../../../../src/maps/optional/ANDORRA';

registerMapData('andorra', ADData);

export default function AndorraMap() {
    return (
        <BaseMap 
            mapId="andorra"
            svgFileName="andorra.svg"
            hoverColor="rgba(0, 51, 160, 0.35)"
            themeColorRgb="0, 51, 160"
            regionLabel="Parish"
        />
    );
}