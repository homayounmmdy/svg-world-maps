import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import SKData from '../../../../src/maps/optional/SLOVAKIA';

registerMapData('slovakia', SKData);

export default function SlovakiaMap() {
    return (
        <BaseMap 
            mapId="slovakia"
            svgFileName="slovakia.svg"
            hoverColor="rgba(11, 78, 162, 0.35)"
            themeColorRgb="11, 78, 162"
            regionLabel="Region"
        />
    );
}