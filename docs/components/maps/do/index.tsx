import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import DOData from '../../../../src/maps/optional/DOMINICAN_REPUBLIC';

registerMapData('dominican-republic', DOData);

export default function DominicanRepublicMap() {
    return (
        <BaseMap 
            mapId="dominican-republic"
            svgFileName="dominican-republic.svg"
            hoverColor="rgba(0, 45, 98, 0.35)"
            themeColorRgb="0, 45, 98"
            regionLabel="Province"
        />
    );
}