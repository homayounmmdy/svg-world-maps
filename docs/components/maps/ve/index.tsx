import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import VEData from '../../../../src/maps/optional/VENEZUELA';

registerMapData('venezuela', VEData);

export default function VenezuelaMap() {
    return (
        <BaseMap 
            mapId="venezuela"
            svgFileName="venezuela.svg"
            hoverColor="rgba(252, 209, 22, 0.35)"
            themeColorRgb="252, 209, 22"
            regionLabel="State"
        />
    );
}