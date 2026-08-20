import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import ETData from '../../../../src/maps/optional/ETHIOPIA';

registerMapData('ethiopia', ETData);

export default function EthiopiaMap() {
    return (
        <BaseMap 
            mapId="ethiopia"
            svgFileName="ethiopia.svg"
            hoverColor="rgba(0, 158, 48, 0.35)"
            themeColorRgb="0, 158, 48"
            regionLabel="Region"
        />
    );
}