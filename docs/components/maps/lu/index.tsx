import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import LUData from '../../../../src/maps/optional/LUXEMBOURG';

registerMapData('luxembourg', LUData);

export default function LuxembourgMap() {
    return (
        <BaseMap 
            mapId="luxembourg"
            svgFileName="luxembourg.svg"
            hoverColor="rgba(237, 28, 36, 0.35)"
            themeColorRgb="237, 28, 36"
            regionLabel="Canton"
        />
    );
}