import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import PFData from '../../../../src/maps/optional/FRENCH_POLYNESIA';

registerMapData('frenchpolynesia', PFData);

export default function FrenchpolynesiaMap() {
    return (
        <BaseMap 
            mapId="frenchpolynesia"
            svgFileName="frenchpolynesia.svg"
            hoverColor="rgba(200, 16, 46, 0.35)"
            themeColorRgb="200, 16, 46"
            regionLabel="Administrative Subdivision"
        />
    );
}