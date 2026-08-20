import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import FOData from '../../../../src/maps/optional/FAEROE_ISLANDS';

registerMapData('faeroeislands', FOData);

export default function FaeroeislandsMap() {
    return (
        <BaseMap 
            mapId="faeroeislands"
            svgFileName="faeroeislands.svg"
            hoverColor="rgba(0, 51, 160, 0.35)"
            themeColorRgb="0, 51, 160"
            regionLabel="Municipality"
        />
    );
}