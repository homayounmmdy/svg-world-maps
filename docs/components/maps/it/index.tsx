import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import ITData from '../../../../src/maps/optional/ITALY';

registerMapData('italy', ITData);

export default function ItalyMap() {
    return (
        <BaseMap 
            mapId="italy"
            svgFileName="italy.svg"
            hoverColor="rgba(0, 146, 70, 0.35)"
            themeColorRgb="0, 146, 70"
            regionLabel="Region"
        />
    );
}