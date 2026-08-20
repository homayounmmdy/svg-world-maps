import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import GTData from '../../../../src/maps/optional/GUATEMALA';

registerMapData('guatemala', GTData);

export default function GuatemalaMap() {
    return (
        <BaseMap 
            mapId="guatemala"
            svgFileName="guatemala.svg"
            hoverColor="rgba(72, 157, 216, 0.35)"
            themeColorRgb="72, 157, 216"
            regionLabel="Department"
        />
    );
}