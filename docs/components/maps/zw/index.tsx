import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import ZWData from '../../../../src/maps/optional/ZIMBABWE';

registerMapData('zimbabwe', ZWData);

export default function ZimbabweMap() {
    return (
        <BaseMap 
            mapId="zimbabwe"
            svgFileName="zimbabwe.svg"
            hoverColor="rgba(0, 158, 48, 0.35)"
            themeColorRgb="0, 158, 48"
            regionLabel="Province"
        />
    );
}