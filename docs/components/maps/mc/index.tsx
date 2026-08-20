import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import MCData from '../../../../src/maps/optional/MONACO';

registerMapData('monaco', MCData);

export default function MonacoMap() {
    return (
        <BaseMap 
            mapId="monaco"
            svgFileName="monaco.svg"
            hoverColor="rgba(207, 14, 45, 0.35)"
            themeColorRgb="207, 14, 45"
            regionLabel="Ward"
        />
    );
}