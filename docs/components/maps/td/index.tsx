import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import TDData from '../../../../src/maps/optional/CHAD';

registerMapData('chad', TDData);

export default function ChadMap() {
    return (
        <BaseMap 
            mapId="chad"
            svgFileName="chad.svg"
            hoverColor="rgba(0, 42, 135, 0.35)"
            themeColorRgb="0, 42, 135"
            regionLabel="Region"
        />
    );
}