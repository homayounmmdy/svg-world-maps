import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import GEData from '../../../../src/maps/optional/GEORGIA';

registerMapData('georgia', GEData);

export default function GeorgiaMap() {
    return (
        <BaseMap 
            mapId="georgia"
            svgFileName="georgia.svg"
            hoverColor="rgba(200, 16, 46, 0.35)"
            themeColorRgb="200, 16, 46"
            regionLabel="Region"
        />
    );
}