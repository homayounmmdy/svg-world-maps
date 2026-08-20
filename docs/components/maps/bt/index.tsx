import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import BTData from '../../../../src/maps/optional/BHUTAN';

registerMapData('bhutan', BTData);

export default function BhutanMap() {
    return (
        <BaseMap 
            mapId="bhutan"
            svgFileName="bhutan.svg"
            hoverColor="rgba(255, 165, 0, 0.35)"
            themeColorRgb="255, 165, 0"
            regionLabel="District"
        />
    );
}