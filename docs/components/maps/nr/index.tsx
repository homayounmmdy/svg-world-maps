import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import NRData from '../../../../src/maps/optional/NAURU';

registerMapData('nauru', NRData);

export default function NauruMap() {
    return (
        <BaseMap 
            mapId="nauru"
            svgFileName="nauru.svg"
            hoverColor="rgba(0, 51, 160, 0.35)"
            themeColorRgb="0, 51, 160"
            regionLabel="District"
        />
    );
}