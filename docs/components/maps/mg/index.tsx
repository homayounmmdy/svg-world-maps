import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import MGData from '../../../../src/maps/optional/MADAGASCAR';

registerMapData('madagascar', MGData);

export default function MadagascarMap() {
    return (
        <BaseMap 
            mapId="madagascar"
            svgFileName="madagascar.svg"
            hoverColor="rgba(218, 41, 28, 0.35)"
            themeColorRgb="218, 41, 28"
            regionLabel="Province"
        />
    );
}