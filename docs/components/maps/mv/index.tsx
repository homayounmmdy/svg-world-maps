import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import MVData from '../../../../src/maps/optional/MALDIVES';

registerMapData('maldives', MVData);

export default function MaldivesMap() {
    return (
        <BaseMap 
            mapId="maldives"
            svgFileName="maldives.svg"
            hoverColor="rgba(218, 41, 28, 0.35)"
            themeColorRgb="218, 41, 28"
            regionLabel="Atoll"
        />
    );
}