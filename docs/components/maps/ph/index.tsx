import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import PHData from '../../../../src/maps/optional/PHILIPPINES';

registerMapData('philippines', PHData);

export default function PhilippinesMap() {
    return (
        <BaseMap 
            mapId="philippines"
            svgFileName="philippines.svg"
            hoverColor="rgba(0, 56, 168, 0.35)"
            themeColorRgb="0, 56, 168"
            regionLabel="Province"
        />
    );
}