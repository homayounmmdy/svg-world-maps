import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import BOData from '../../../../src/maps/optional/BOLIVIA';

registerMapData('bolivia', BOData);

export default function BoliviaMap() {
    return (
        <BaseMap 
            mapId="bolivia"
            svgFileName="bolivia.svg"
            hoverColor="rgba(217, 45, 32, 0.35)"
            themeColorRgb="217, 45, 32"
            regionLabel="Department"
        />
    );
}