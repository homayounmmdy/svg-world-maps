import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import ZMData from '../../../../src/maps/optional/ZAMBIA';

registerMapData('zambia', ZMData);

export default function ZambiaMap() {
    return (
        <BaseMap 
            mapId="zambia"
            svgFileName="zambia.svg"
            hoverColor="rgba(28, 151, 53, 0.35)"
            themeColorRgb="28, 151, 53"
            regionLabel="Province"
        />
    );
}