import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import HNData from '../../../../src/maps/optional/HONDURAS';

registerMapData('honduras', HNData);

export default function HondurasMap() {
    return (
        <BaseMap 
            mapId="honduras"
            svgFileName="honduras.svg"
            hoverColor="rgba(0, 112, 184, 0.35)"
            themeColorRgb="0, 112, 184"
            regionLabel="Department"
        />
    );
}