import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import SEData from '../../../../src/maps/optional/SWEDEN';

registerMapData('sweden', SEData);

export default function SwedenMap() {
    return (
        <BaseMap 
            mapId="sweden"
            svgFileName="sweden.svg"
            hoverColor="rgba(0, 106, 175, 0.35)"
            themeColorRgb="0, 106, 175"
            regionLabel="County"
        />
    );
}