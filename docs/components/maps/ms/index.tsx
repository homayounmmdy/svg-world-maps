import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import MSData from '../../../../src/maps/optional/MONTSERRAT';

registerMapData('montserrat', MSData);

export default function MontserratMap() {
    return (
        <BaseMap 
            mapId="montserrat"
            svgFileName="montserrat.svg"
            hoverColor="rgba(0, 51, 160, 0.35)"
            themeColorRgb="0, 51, 160"
            regionLabel="Parish"
        />
    );
}