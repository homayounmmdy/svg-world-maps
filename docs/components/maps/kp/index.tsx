import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import KPData from '../../../../src/maps/optional/NORTH_KOREA';

registerMapData('northkorea', KPData);

export default function NorthkoreaMap() {
    return (
        <BaseMap 
            mapId="northkorea"
            svgFileName="northkorea.svg"
            hoverColor="rgba(0, 51, 160, 0.35)"
            themeColorRgb="0, 51, 160"
            regionLabel="Province"
        />
    );
}