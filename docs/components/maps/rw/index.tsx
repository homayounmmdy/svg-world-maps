import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import RWData from '../../../../src/maps/optional/RWANDA';

registerMapData('rwanda', RWData);

export default function RwandaMap() {
    return (
        <BaseMap 
            mapId="rwanda"
            svgFileName="rwanda.svg"
            hoverColor="rgba(0, 120, 60, 0.35)"
            themeColorRgb="0, 120, 60"
            regionLabel="Province"
        />
    );
}