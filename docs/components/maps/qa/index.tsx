import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import QAData from '../../../../src/maps/optional/QATAR';

registerMapData('qatar', QAData);

export default function QatarMap() {
    return (
        <BaseMap 
            mapId="qatar"
            svgFileName="qatar.svg"
            hoverColor="rgba(138, 28, 51, 0.35)"
            themeColorRgb="138, 28, 51"
            regionLabel="Municipality"
        />
    );
}