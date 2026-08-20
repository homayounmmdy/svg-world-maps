import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import SBData from '../../../../src/maps/optional/SOLOMON_ISLANDS';

registerMapData('solomon-islands', SBData);

export default function SolomonIslandsMap() {
    return (
        <BaseMap 
            mapId="solomon-islands"
            svgFileName="solomon-islands.svg"
            hoverColor="rgba(0, 51, 160, 0.35)"
            themeColorRgb="0, 51, 160"
            regionLabel="Province"
        />
    );
}