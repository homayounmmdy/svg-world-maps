import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import BIData from '../../../../src/maps/optional/BURUNDI';

registerMapData('burundi', BIData);

export default function BurundiMap() {
    return (
        <BaseMap 
            mapId="burundi"
            svgFileName="burundi.svg"
            hoverColor="rgba(200, 16, 46, 0.35)"
            themeColorRgb="200, 16, 46"
            regionLabel="Province"
        />
    );
}