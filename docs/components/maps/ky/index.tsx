import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import KYData from '../../../../src/maps/optional/CAYMAN_ISLANDS';

registerMapData('cayman-islands', KYData);

export default function CaymanIslandsMap() {
    return (
        <BaseMap 
            mapId="cayman-islands"
            svgFileName="cayman-islands.svg"
            hoverColor="rgba(0, 51, 160, 0.35)"
            themeColorRgb="0, 51, 160"
            regionLabel="District"
        />
    );
}