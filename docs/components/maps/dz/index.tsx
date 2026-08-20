import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import DZData from '../../../../src/maps/optional/ALGERIA';

registerMapData('algeria', DZData);

export default function AlgeriaMap() {
    return (
        <BaseMap 
            mapId="algeria"
            svgFileName="algeria.svg"
            hoverColor="rgba(0, 98, 51, 0.35)"
            themeColorRgb="0, 98, 51"
            regionLabel="Province"
        />
    );
}