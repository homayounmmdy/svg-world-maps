import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import COData from '../../../../src/maps/optional/COLOMBIA';

registerMapData('colombia', COData);

export default function ColombiaMap() {
    return (
        <BaseMap 
            mapId="colombia"
            svgFileName="colombia.svg"
            hoverColor="rgba(252, 209, 22, 0.35)"
            themeColorRgb="252, 209, 22"
            regionLabel="Department"
        />
    );
}