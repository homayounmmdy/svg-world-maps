import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import SSData from '../../../../src/maps/optional/SOUTH_SUDAN';

registerMapData('south-sudan', SSData);

export default function SouthSudanMap() {
    return (
        <BaseMap 
            mapId="south-sudan"
            svgFileName="south-sudan.svg"
            hoverColor="rgba(0, 158, 48, 0.35)"
            themeColorRgb="0, 158, 48"
            regionLabel="State"
        />
    );
}