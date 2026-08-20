import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import NLData from '../../../../src/maps/optional/NETHERLANDS';

registerMapData('netherlands', NLData);

export default function NetherlandsMap() {
    return (
        <BaseMap 
            mapId="netherlands"
            svgFileName="netherlands.svg"
            hoverColor="rgba(255, 125, 0, 0.35)"
            themeColorRgb="255, 125, 0"
            regionLabel="Province"
        />
    );
}