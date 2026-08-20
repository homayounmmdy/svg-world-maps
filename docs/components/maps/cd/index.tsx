import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import CDData from '../../../../src/maps/optional/DEMOCRATIC_REPUBLIC_OF_THE_CONGO';

registerMapData('democratic-republic-of-the-congo', CDData);

export default function DemocraticRepublicOfTheCongoMap() {
    return (
        <BaseMap 
            mapId="democratic-republic-of-the-congo"
            svgFileName="democratic-republic-of-the-congo.svg"
            hoverColor="rgba(118, 208, 242, 0.35)"
            themeColorRgb="118, 208, 242"
            regionLabel="Province"
        />
    );
}