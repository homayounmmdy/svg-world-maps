import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import CIData from '../../../../src/maps/optional/COTE_D_IVOIRE';

registerMapData('cte_d_ivoire', CIData);

export default function cteDIvoireMap() {
    return (
        <BaseMap 
            mapId="cte-divoire"
            svgFileName="cte-divoire.svg"
            hoverColor="rgba(247, 127, 0, 0.35)"
            themeColorRgb="247, 127, 0"
            regionLabel="District"
        />
    );
}