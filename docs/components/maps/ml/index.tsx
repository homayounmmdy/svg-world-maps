import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import MLData from '../../../../src/maps/optional/MALI';

registerMapData('mali', MLData);

export default function MaliMap() {
    return (
        <BaseMap 
            mapId="mali"
            svgFileName="mali.svg"
            hoverColor="rgba(206, 17, 38, 0.35)"
            themeColorRgb="206, 17, 38"
            regionLabel="Region"
        />
    );
}