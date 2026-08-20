import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import SYData from '../../../../src/maps/optional/SYRIA';

registerMapData('syria', SYData);

export default function SyriaMap() {
    return (
        <BaseMap 
            mapId="syria"
            svgFileName="syria.svg"
            hoverColor="rgba(206, 17, 38, 0.35)"
            themeColorRgb="206, 17, 38"
            regionLabel="Governorate"
        />
    );
}