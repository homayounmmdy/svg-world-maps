import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import SZData from '../../../../src/maps/optional/SWAZILAND';

registerMapData('swaziland', SZData);

export default function SwazilandMap() {
    return (
        <BaseMap 
            mapId="swaziland"
            svgFileName="swaziland.svg"
            hoverColor="rgba(0, 51, 160, 0.35)"
            themeColorRgb="0, 51, 160"
            regionLabel="Region"
        />
    );
}