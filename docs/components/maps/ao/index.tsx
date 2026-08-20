import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import AOData from '../../../../src/maps/optional/ANGOLA';

registerMapData('angola', AOData);

export default function AngolaMap() {
    return (
        <BaseMap 
            mapId="angola"
            svgFileName="angola.svg"
            hoverColor="rgba(200, 16, 46, 0.35)"
            themeColorRgb="200, 16, 46"
            regionLabel="Province"
        />
    );
}