import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import SRData from '../../../../src/maps/optional/SURINAME';

registerMapData('suriname', SRData);

export default function SurinameMap() {
    return (
        <BaseMap 
            mapId="suriname"
            svgFileName="suriname.svg"
            hoverColor="rgba(0, 120, 60, 0.35)"
            themeColorRgb="0, 120, 60"
            regionLabel="District"
        />
    );
}