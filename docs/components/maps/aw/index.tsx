import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import AWData from '../../../../src/maps/optional/ARUBA';

registerMapData('aruba', AWData);

export default function ArubaMap() {
    return (
        <BaseMap 
            mapId="aruba"
            svgFileName="aruba.svg"
            hoverColor="rgba(0, 51, 160, 0.35)"
            themeColorRgb="0, 51, 160"
            regionLabel="Region"
        />
    );
}