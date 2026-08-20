import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import IQData from '../../../../src/maps/optional/IRAQ';

registerMapData('iraq', IQData);

export default function IraqMap() {
    return (
        <BaseMap 
            mapId="iraq"
            svgFileName="iraq.svg"
            hoverColor="rgba(206, 17, 38, 0.35)"
            themeColorRgb="206, 17, 38"
            regionLabel="Governorate"
        />
    );
}