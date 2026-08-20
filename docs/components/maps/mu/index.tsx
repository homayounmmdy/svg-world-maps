import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import MUData from '../../../../src/maps/optional/MAURITIUS';

registerMapData('mauritius', MUData);

export default function MauritiusMap() {
    return (
        <BaseMap 
            mapId="mauritius"
            svgFileName="mauritius.svg"
            hoverColor="rgba(218, 41, 28, 0.35)"
            themeColorRgb="218, 41, 28"
            regionLabel="District"
        />
    );
}