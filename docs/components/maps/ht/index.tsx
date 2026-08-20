import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import HTData from '../../../../src/maps/optional/HAITI';

registerMapData('haiti', HTData);

export default function HaitiMap() {
    return (
        <BaseMap 
            mapId="haiti"
            svgFileName="haiti.svg"
            hoverColor="rgba(0, 32, 152, 0.35)"
            themeColorRgb="0, 32, 152"
            regionLabel="Department"
        />
    );
}