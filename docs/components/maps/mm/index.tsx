import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import MMData from '../../../../src/maps/optional/MYANMAR';

registerMapData('myanmar', MMData);

export default function MyanmarMap() {
    return (
        <BaseMap 
            mapId="myanmar"
            svgFileName="myanmar.svg"
            hoverColor="rgba(234, 46, 48, 0.35)"
            themeColorRgb="234, 46, 48"
            regionLabel="Region"
        />
    );
}