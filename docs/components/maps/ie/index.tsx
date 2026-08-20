import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import IEData from '../../../../src/maps/optional/IRELAND';

registerMapData('ireland', IEData);

export default function IrelandMap() {
    return (
        <BaseMap 
            mapId="ireland"
            svgFileName="ireland.svg"
            hoverColor="rgba(0, 154, 68, 0.35)"
            themeColorRgb="0, 154, 68"
            regionLabel="County"
        />
    );
}