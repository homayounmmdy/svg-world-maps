import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import CNData from '../../../../src/maps/optional/CHINA';

registerMapData('china', CNData);

export default function ChinaMap() {
    return (
        <BaseMap 
            mapId="china"
            svgFileName="china.svg"
            hoverColor="rgba(238, 28, 39, 0.35)"
            themeColorRgb="238, 28, 39"
            regionLabel="Province"
        />
    );
}