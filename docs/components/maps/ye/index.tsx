import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import YEData from '../../../../src/maps/optional/YEMEN';

registerMapData('yemen', YEData);

export default function YemenMap() {
    return (
        <BaseMap 
            mapId="yemen"
            svgFileName="yemen.svg"
            hoverColor="rgba(206, 17, 38, 0.35)"
            themeColorRgb="206, 17, 38"
            regionLabel="Governorate"
        />
    );
}