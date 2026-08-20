import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import RSData from '../../../../src/maps/optional/SERBIA';

registerMapData('serbia', RSData);

export default function SerbiaMap() {
    return (
        <BaseMap 
            mapId="serbia"
            svgFileName="serbia.svg"
            hoverColor="rgba(198, 54, 60, 0.35)"
            themeColorRgb="198, 54, 60"
            regionLabel="District"
        />
    );
}