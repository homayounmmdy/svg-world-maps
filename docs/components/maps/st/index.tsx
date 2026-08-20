import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import STData from '../../../../src/maps/optional/SÃO_TOMÉ_AND_PRÍNCIPE';

registerMapData('so-tom-and-prncipe', STData);

export default function SoTomAndPrncipeMap() {
    return (
        <BaseMap 
            mapId="so-tom-and-prncipe"
            svgFileName="so-tom-and-prncipe.svg"
            hoverColor="rgba(0, 158, 48, 0.35)"
            themeColorRgb="0, 158, 48"
            regionLabel="District"
        />
    );
}