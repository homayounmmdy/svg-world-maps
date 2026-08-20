import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import GAData from '../../../../src/maps/optional/GABON';

registerMapData('gabon', GAData);

export default function GabonMap() {
    return (
        <BaseMap 
            mapId="gabon"
            svgFileName="gabon.svg"
            hoverColor="rgba(0, 158, 48, 0.35)"
            themeColorRgb="0, 158, 48"
            regionLabel="Province"
        />
    );
}