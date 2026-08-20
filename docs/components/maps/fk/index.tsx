import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import FKData from '../../../../src/maps/optional/FALKLAND_ISLANDS';

registerMapData('falklandislands', FKData);

export default function FalklandislandsMap() {
    return (
        <BaseMap 
            mapId="falklandislands"
            svgFileName="falklandislands.svg"
            hoverColor="rgba(0, 33, 115, 0.35)"
            themeColorRgb="0, 33, 115"
            regionLabel="Settlement"
        />
    );
}