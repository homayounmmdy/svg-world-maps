import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import ISData from '../../../../src/maps/optional/ICELAND';

registerMapData('iceland', ISData);

export default function IcelandMap() {
    return (
        <BaseMap 
            mapId="iceland"
            svgFileName="iceland.svg"
            hoverColor="rgba(0, 58, 135, 0.35)"
            themeColorRgb="0, 58, 135"
            regionLabel="Region"
        />
    );
}