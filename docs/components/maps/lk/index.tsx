import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import LKData from '../../../../src/maps/optional/SRI_LANKA';

registerMapData('sri-lanka', LKData);

export default function SriLankaMap() {
    return (
        <BaseMap 
            mapId="sri-lanka"
            svgFileName="sri-lanka.svg"
            hoverColor="rgba(130, 0, 0, 0.35)"
            themeColorRgb="130, 0, 0"
            regionLabel="Province"
        />
    );
}