import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import HKData from '../../../../src/maps/optional/HONG_KONG';

registerMapData('hong-kong', HKData);

export default function HongKongMap() {
    return (
        <BaseMap 
            mapId="hong-kong"
            svgFileName="hong-kong.svg"
            hoverColor="rgba(226, 22, 33, 0.35)"
            themeColorRgb="226, 22, 33"
            regionLabel="District"
        />
    );
}