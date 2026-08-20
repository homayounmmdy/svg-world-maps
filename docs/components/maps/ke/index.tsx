import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import KEData from '../../../../src/maps/optional/KENYA';

registerMapData('kenya', KEData);

export default function KenyaMap() {
    return (
        <BaseMap 
            mapId="kenya"
            svgFileName="kenya.svg"
            hoverColor="rgba(186, 12, 47, 0.35)"
            themeColorRgb="186, 12, 47"
            regionLabel="County"
        />
    );
}