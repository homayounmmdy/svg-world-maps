import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import XEData from '../../../../src/maps/optional/EUROPE';

registerMapData('europe', XEData);

export default function EuropeMap() {
    return (
        <BaseMap 
            mapId="europe"
            svgFileName="europe.svg"
            hoverColor="rgba(0, 51, 153, 0.35)"
            themeColorRgb="0, 51, 153"
            regionLabel="Country"
        />
    );
}