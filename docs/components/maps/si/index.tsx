import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import SIData from '../../../../src/maps/optional/SLOVENIA';

registerMapData('slovenia', SIData);

export default function SloveniaMap() {
    return (
        <BaseMap 
            mapId="slovenia"
            svgFileName="slovenia.svg"
            hoverColor="rgba(0, 51, 135, 0.35)"
            themeColorRgb="0, 51, 135"
            regionLabel="Municipality"
        />
    );
}