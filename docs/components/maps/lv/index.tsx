import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import LVData from '../../../../src/maps/optional/LATVIA';

registerMapData('latvia', LVData);

export default function LatviaMap() {
    return (
        <BaseMap 
            mapId="latvia"
            svgFileName="latvia.svg"
            hoverColor="rgba(155, 0, 45, 0.35)"
            themeColorRgb="155, 0, 45"
            regionLabel="Municipality"
        />
    );
}