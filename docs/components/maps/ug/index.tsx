import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import UGData from '../../../../src/maps/optional/UGANDA';

registerMapData('uganda', UGData);

export default function UgandaMap() {
    return (
        <BaseMap 
            mapId="uganda"
            svgFileName="uganda.svg"
            hoverColor="rgba(218, 41, 28, 0.35)"
            themeColorRgb="218, 41, 28"
            regionLabel="District"
        />
    );
}