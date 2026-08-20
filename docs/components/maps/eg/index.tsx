import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import EGData from '../../../../src/maps/optional/EGYPT';

registerMapData('egypt', EGData);

export default function EgyptMap() {
    return (
        <BaseMap 
            mapId="egypt"
            svgFileName="egypt.svg"
            hoverColor="rgba(206, 17, 38, 0.35)"
            themeColorRgb="206, 17, 38"
            regionLabel="Governorate"
        />
    );
}