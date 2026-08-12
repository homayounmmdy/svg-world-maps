import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import CAData from '../../../../src/maps/optional/CANADA';

registerMapData('canada', CAData);

export default function CanadaMap() {
    return (
        <BaseMap 
            mapId="canada"
            svgFileName="canada.svg"
            hoverColor="rgba(255, 0, 0, 0.35)"
            themeColorRgb="255, 0, 0"
            regionLabel="Province"
        />
    );
}