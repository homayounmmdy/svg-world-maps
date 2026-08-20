import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import CYData from '../../../../src/maps/optional/CYPRUS';

registerMapData('cyprus', CYData);

export default function CyprusMap() {
    return (
        <BaseMap 
            mapId="cyprus"
            svgFileName="cyprus.svg"
            hoverColor="rgba(207, 146, 52, 0.35)"
            themeColorRgb="207, 146, 52"
            regionLabel="District"
        />
    );
}