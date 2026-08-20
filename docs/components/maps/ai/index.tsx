import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import AIData from '../../../../src/maps/optional/ANGUILLA';

registerMapData('anguilla', AIData);

export default function AnguillaMap() {
    return (
        <BaseMap 
            mapId="anguilla"
            svgFileName="anguilla.svg"
            hoverColor="rgba(0, 56, 168, 0.35)"
            themeColorRgb="0, 56, 168"
            regionLabel="District"
        />
    );
}