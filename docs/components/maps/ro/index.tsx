import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import ROData from '../../../../src/maps/optional/ROMANIA';

registerMapData('romania', ROData);

export default function RomaniaMap() {
    return (
        <BaseMap 
            mapId="romania"
            svgFileName="romania.svg"
            hoverColor="rgba(0, 43, 127, 0.35)"
            themeColorRgb="0, 43, 127"
            regionLabel="County"
        />
    );
}