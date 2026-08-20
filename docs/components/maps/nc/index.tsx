import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import NCData from '../../../../src/maps/optional/NEW_CALEDONIA';

registerMapData('newcaledonia', NCData);

export default function NewcaledoniaMap() {
    return (
        <BaseMap 
            mapId="newcaledonia"
            svgFileName="newcaledonia.svg"
            hoverColor="rgba(238, 28, 39, 0.35)"
            themeColorRgb="238, 28, 39"
            regionLabel="Province"
        />
    );
}