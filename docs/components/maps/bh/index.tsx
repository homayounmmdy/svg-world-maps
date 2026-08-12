import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import bhData from '../../../../src/maps/optional/BAHRAIN';

registerMapData('bahrain', bhData);

export default function BahrainMap() {
    return (
        <BaseMap 
            mapId="bahrain"
            svgFileName="bahrain.svg"
            hoverColor="rgba(218, 41, 46, 0.35)" // Bahraini Red
            themeColorRgb="218, 41, 46"
            regionLabel="Governorate"
        />
    );
}