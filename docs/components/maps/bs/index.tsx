import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import BSData from '../../../../src/maps/optional/BAHAMAS';

registerMapData('bahamas', BSData);

export default function BahamasMap() {
    return (
        <BaseMap 
            mapId="bahamas"
            svgFileName="bahamas.svg"
            hoverColor="rgba(0, 123, 167, 0.35)"
            themeColorRgb="0, 123, 167"
            regionLabel="District"
        />
    );
}