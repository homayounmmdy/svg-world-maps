import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import BYData from '../../../../src/maps/optional/BELARUS';

registerMapData('belarus', BYData);

export default function BelarusMap() {
    return (
        <BaseMap 
            mapId="belarus"
            svgFileName="belarus.svg"
            hoverColor="rgba(210, 39, 48, 0.35)"
            themeColorRgb="210, 39, 48"
            regionLabel="Region"
        />
    );
}