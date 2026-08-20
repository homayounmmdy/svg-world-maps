import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import SAData from '../../../../src/maps/optional/SAUDI_ARABIA';

registerMapData('saudi-arabia', SAData);

export default function SaudiArabiaMap() {
    return (
        <BaseMap 
            mapId="saudi-arabia"
            svgFileName="saudi-arabia.svg"
            hoverColor="rgba(0, 105, 56, 0.35)"
            themeColorRgb="0, 105, 56"
            regionLabel="Region"
        />
    );
}