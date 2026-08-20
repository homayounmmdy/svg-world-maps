import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import CGData from '../../../../src/maps/optional/REPUBLIC_OF_CONGO';

registerMapData('republic-of-congo', CGData);

export default function RepublicOfCongoMap() {
    return (
        <BaseMap 
            mapId="republic-of-congo"
            svgFileName="republic-of-congo.svg"
            hoverColor="rgba(254, 203, 0, 0.35)"
            themeColorRgb="254, 203, 0"
            regionLabel="Department"
        />
    );
}