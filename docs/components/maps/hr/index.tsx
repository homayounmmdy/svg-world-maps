import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import HRData from '../../../../src/maps/optional/CROATIA';

registerMapData('croatia', HRData);

export default function CroatiaMap() {
    return (
        <BaseMap 
            mapId="croatia"
            svgFileName="croatia.svg"
            hoverColor="rgba(255, 0, 0, 0.35)"
            themeColorRgb="255, 0, 0"
            regionLabel="County"
        />
    );
}