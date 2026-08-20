import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import DMData from '../../../../src/maps/optional/DOMINICA';

registerMapData('dominica', DMData);

export default function DominicaMap() {
    return (
        <BaseMap 
            mapId="dominica"
            svgFileName="dominica.svg"
            hoverColor="rgba(0, 120, 60, 0.35)"
            themeColorRgb="0, 120, 60"
            regionLabel="Parish"
        />
    );
}