import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import MZData from '../../../../src/maps/optional/MOZAMBIQUE';

registerMapData('mozambique', MZData);

export default function MozambiqueMap() {
    return (
        <BaseMap 
            mapId="mozambique"
            svgFileName="mozambique.svg"
            hoverColor="rgba(0, 120, 60, 0.35)"
            themeColorRgb="0, 120, 60"
            regionLabel="Province"
        />
    );
}