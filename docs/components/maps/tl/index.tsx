import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import TLData from '../../../../src/maps/optional/TIMOR-LESTE';

registerMapData('timor-leste', TLData);

export default function TimorlesteMap() {
    return (
        <BaseMap 
            mapId="timor-leste"
            svgFileName="timor-leste.svg"
            hoverColor="rgba(218, 41, 28, 0.35)"
            themeColorRgb="218, 41, 28"
            regionLabel="Municipality"
        />
    );
}