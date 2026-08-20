import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import BBData from '../../../../src/maps/optional/BARBADOS';

registerMapData('barbados', BBData);

export default function BarbadosMap() {
    return (
        <BaseMap 
            mapId="barbados"
            svgFileName="barbados.svg"
            hoverColor="rgba(0, 33, 115, 0.35)"
            themeColorRgb="0, 33, 115"
            regionLabel="Parish"
        />
    );
}