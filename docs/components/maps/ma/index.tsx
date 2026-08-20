import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import MAData from '../../../../src/maps/optional/MOROCCO';

registerMapData('morocco', MAData);

export default function MoroccoMap() {
    return (
        <BaseMap 
            mapId="morocco"
            svgFileName="morocco.svg"
            hoverColor="rgba(193, 39, 45, 0.35)"
            themeColorRgb="193, 39, 45"
            regionLabel="Region"
        />
    );
}