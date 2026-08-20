import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import SCData from '../../../../src/maps/optional/SEYCHELLES';

registerMapData('seychelles', SCData);

export default function SeychellesMap() {
    return (
        <BaseMap 
            mapId="seychelles"
            svgFileName="seychelles.svg"
            hoverColor="rgba(0, 51, 160, 0.35)"
            themeColorRgb="0, 51, 160"
            regionLabel="District"
        />
    );
}