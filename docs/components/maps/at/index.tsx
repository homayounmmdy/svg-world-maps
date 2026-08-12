import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import atData from '../../../../src/maps/optional/AUSTRIA';

registerMapData('austria', atData);

export default function AustriaMap() {
    return (
        <BaseMap 
            mapId="austria"
            svgFileName="austria.svg"
            hoverColor="rgba(239, 51, 64, 0.35)" // Austrian Red
            themeColorRgb="239, 51, 64"
            regionLabel="State"
        />
    );
}