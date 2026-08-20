import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import UYData from '../../../../src/maps/optional/URUGUAY';

registerMapData('uruguay', UYData);

export default function UruguayMap() {
    return (
        <BaseMap 
            mapId="uruguay"
            svgFileName="uruguay.svg"
            hoverColor="rgba(0, 51, 160, 0.35)"
            themeColorRgb="0, 51, 160"
            regionLabel="Department"
        />
    );
}