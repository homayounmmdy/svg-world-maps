import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import GRData from '../../../../src/maps/optional/GREECE';

registerMapData('greece', GRData);

export default function GreeceMap() {
    return (
        <BaseMap 
            mapId="greece"
            svgFileName="greece.svg"
            hoverColor="rgba(0, 85, 164, 0.35)"
            themeColorRgb="0, 85, 164"
            regionLabel="Region"
        />
    );
}