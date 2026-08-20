import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import CWData from '../../../../src/maps/optional/CURACO';

registerMapData('curaco', CWData);

export default function CuracoMap() {
    return (
        <BaseMap 
            mapId="curaco"
            svgFileName="curaco.svg"
            hoverColor="rgba(0, 43, 127, 0.35)"
            themeColorRgb="0, 43, 127"
            regionLabel="Municipality"
        />
    );
}