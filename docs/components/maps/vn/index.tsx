import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import VNData from '../../../../src/maps/optional/VIETNAM';

registerMapData('vietnam', VNData);

export default function VietnamMap() {
    return (
        <BaseMap 
            mapId="vietnam"
            svgFileName="vietnam.svg"
            hoverColor="rgba(218, 37, 29, 0.35)"
            themeColorRgb="218, 37, 29"
            regionLabel="Province"
        />
    );
}