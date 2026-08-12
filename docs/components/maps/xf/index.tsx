import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import xfData from '../../../../src/maps/optional/AFRICA';

registerMapData('africa', xfData);

export default function AfricaMap() {
    return (
        <BaseMap 
            mapId="africa"
            svgFileName="africa.svg"
            hoverColor="rgba(0, 158, 73, 0.35)" // Pan-African Green
            themeColorRgb="0, 158, 73"
            regionLabel="Country"
        />
    );
}