import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import CRData from '../../../../src/maps/optional/COSTA_RICA';

registerMapData('costarica', CRData);

export default function CostaricaMap() {
    return (
        <BaseMap 
            mapId="costarica"
            svgFileName="costarica.svg"
            hoverColor="rgba(0, 43, 127, 0.35)"
            themeColorRgb="0, 43, 127"
            regionLabel="Province"
        />
    );
}