import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import SDData from '../../../../src/maps/optional/SUDAN';

registerMapData('sudan', SDData);

export default function SudanMap() {
    return (
        <BaseMap 
            mapId="sudan"
            svgFileName="sudan.svg"
            hoverColor="rgba(210, 16, 52, 0.35)"
            themeColorRgb="210, 16, 52"
            regionLabel="State"
        />
    );
}