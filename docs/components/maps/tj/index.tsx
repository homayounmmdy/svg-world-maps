import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import TJData from '../../../../src/maps/optional/TAJIKISTAN';

registerMapData('tajikistan', TJData);

export default function TajikistanMap() {
    return (
        <BaseMap 
            mapId="tajikistan"
            svgFileName="tajikistan.svg"
            hoverColor="rgba(200, 16, 46, 0.35)"
            themeColorRgb="200, 16, 46"
            regionLabel="Region"
        />
    );
}