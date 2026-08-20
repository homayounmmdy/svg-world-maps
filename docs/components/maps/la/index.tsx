import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import LAData from '../../../../src/maps/optional/LAOS';

registerMapData('laos', LAData);

export default function LaosMap() {
    return (
        <BaseMap 
            mapId="laos"
            svgFileName="laos.svg"
            hoverColor="rgba(174, 15, 29, 0.35)"
            themeColorRgb="174, 15, 29"
            regionLabel="Province"
        />
    );
}