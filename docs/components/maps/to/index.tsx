import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import TOData from '../../../../src/maps/optional/TONGA';

registerMapData('tonga', TOData);

export default function TongaMap() {
    return (
        <BaseMap 
            mapId="tonga"
            svgFileName="tonga.svg"
            hoverColor="rgba(200, 16, 46, 0.35)"
            themeColorRgb="200, 16, 46"
            regionLabel="Division"
        />
    );
}