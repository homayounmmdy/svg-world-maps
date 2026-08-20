import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import TRData from '../../../../src/maps/optional/TURKEY';

registerMapData('turkey', TRData);

export default function TurkeyMap() {
    return (
        <BaseMap 
            mapId="turkey"
            svgFileName="turkey.svg"
            hoverColor="rgba(227, 10, 23, 0.35)"
            themeColorRgb="227, 10, 23"
            regionLabel="Province"
        />
    );
}