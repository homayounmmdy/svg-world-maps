import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import brData from '../../../../src/maps/optional/BRAZIL';

registerMapData('brazil', brData);

export default function BrazilMap() {
    return (
        <BaseMap 
            mapId="brazil"
            svgFileName="brazil.svg"
            hoverColor="rgba(0, 155, 58, 0.35)" // Brazilian Green
            themeColorRgb="0, 155, 58"
            regionLabel="State"
        />
    );
}