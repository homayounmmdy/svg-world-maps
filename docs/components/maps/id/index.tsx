import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import IDData from '../../../../src/maps/optional/INDONESIA';

registerMapData('indonesia', IDData);

export default function IndonesiaMap() {
    return (
        <BaseMap 
            mapId="indonesia"
            svgFileName="indonesia.svg"
            hoverColor="rgba(237, 28, 36, 0.35)"
            themeColorRgb="237, 28, 36"
            regionLabel="Province"
        />
    );
}