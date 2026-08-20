import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import VIData from '../../../../src/maps/optional/UNITED_STATES_VIRGIN_ISLANDS';

registerMapData('unitedstatesvirginislands', VIData);

export default function UnitedstatesvirginislandsMap() {
    return (
        <BaseMap 
            mapId="unitedstatesvirginislands"
            svgFileName="unitedstatesvirginislands.svg"
            hoverColor="rgba(0, 51, 160, 0.35)"
            themeColorRgb="0, 51, 160"
            regionLabel="District"
        />
    );
}