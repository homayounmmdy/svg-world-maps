import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import arData from '../../../../src/maps/optional/ARGENTINA';

registerMapData('argentina', arData);

export default function ArgentinaMap() {
    return (
        <BaseMap 
            mapId="argentina"
            svgFileName="argentina.svg"
            hoverColor="rgba(117, 186, 222, 0.35)" // Argentine Celeste
            themeColorRgb="117, 186, 222"
            regionLabel="Province"
        />
    );
}