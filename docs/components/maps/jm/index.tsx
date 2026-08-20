import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import JMData from '../../../../src/maps/optional/JAMAICA';

registerMapData('jamaica', JMData);

export default function JamaicaMap() {
    return (
        <BaseMap 
            mapId="jamaica"
            svgFileName="jamaica.svg"
            hoverColor="rgba(0, 154, 68, 0.35)"
            themeColorRgb="0, 154, 68"
            regionLabel="Parish"
        />
    );
}