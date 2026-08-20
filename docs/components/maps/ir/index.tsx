import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import IRData from '../../../../src/maps/optional/IRAN';

registerMapData('iran', IRData);

export default function IranMap() {
    return (
        <BaseMap 
            mapId="iran"
            svgFileName="iran.svg"
            hoverColor="rgba(218, 0, 0, 0.35)"
            themeColorRgb="218, 0, 0"
            regionLabel="Province"
        />
    );
}