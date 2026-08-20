import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import SVData from '../../../../src/maps/optional/EL_SALVADOR';

registerMapData('elsalvador', SVData);

export default function ElsalvadorMap() {
    return (
        <BaseMap 
            mapId="elsalvador"
            svgFileName="elsalvador.svg"
            hoverColor="rgba(0, 65, 158, 0.35)"
            themeColorRgb="0, 65, 158"
            regionLabel="Department"
        />
    );
}