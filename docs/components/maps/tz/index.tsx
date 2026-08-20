import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import TZData from '../../../../src/maps/optional/TANZANIA';

registerMapData('tanzania', TZData);

export default function TanzaniaMap() {
    return (
        <BaseMap 
            mapId="tanzania"
            svgFileName="tanzania.svg"
            hoverColor="rgba(23, 139, 50, 0.35)"
            themeColorRgb="23, 139, 50"
            regionLabel="Region"
        />
    );
}