import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import FIData from '../../../../src/maps/optional/FINLAND';

registerMapData('finland', FIData);

export default function FinlandMap() {
    return (
        <BaseMap 
            mapId="finland"
            svgFileName="finland.svg"
            hoverColor="rgba(0, 47, 108, 0.35)"
            themeColorRgb="0, 47, 108"
            regionLabel="Region"
        />
    );
}