import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import HUData from '../../../../src/maps/optional/HUNGARY';

registerMapData('hungary', HUData);

export default function HungaryMap() {
    return (
        <BaseMap 
            mapId="hungary"
            svgFileName="hungary.svg"
            hoverColor="rgba(206, 14, 45, 0.35)"
            themeColorRgb="206, 14, 45"
            regionLabel="County"
        />
    );
}