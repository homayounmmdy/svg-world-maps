import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import MTData from '../../../../src/maps/optional/MALTA';

registerMapData('malta', MTData);

export default function MaltaMap() {
    return (
        <BaseMap 
            mapId="malta"
            svgFileName="malta.svg"
            hoverColor="rgba(207, 14, 45, 0.35)"
            themeColorRgb="207, 14, 45"
            regionLabel="Local Council"
        />
    );
}