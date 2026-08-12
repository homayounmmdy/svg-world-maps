import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import bzData from '../../../../src/maps/optional/BELIZE';

registerMapData('belize', bzData);

export default function BelizeMap() {
    return (
        <BaseMap 
            mapId="belize"
            svgFileName="belize.svg"
            hoverColor="rgba(0, 63, 135, 0.35)" // Belizean Blue
            themeColorRgb="0, 63, 135"
            regionLabel="District"
        />
    );
}