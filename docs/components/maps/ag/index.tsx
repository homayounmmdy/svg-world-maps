import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import AGData from '../../../../src/maps/optional/ANTIGUA_AND_BARBUDA';

registerMapData('antigua-and-barbuda', AGData);

export default function AntiguaAndBarbudaMap() {
    return (
        <BaseMap 
            mapId="antigua-and-barbuda"
            svgFileName="antigua-and-barbuda.svg"
            hoverColor="rgba(200, 16, 46, 0.35)"
            themeColorRgb="200, 16, 46"
            regionLabel="Parish"
        />
    );
}