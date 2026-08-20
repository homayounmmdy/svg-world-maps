import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import ALData from '../../../../src/maps/optional/ALBANIA';

registerMapData('albania', ALData);

export default function AlbaniaMap() {
    return (
        <BaseMap 
            mapId="albania"
            svgFileName="albania.svg"
            hoverColor="rgba(228, 0, 21, 0.35)"
            themeColorRgb="228, 0, 21"
            regionLabel="County"
        />
    );
}