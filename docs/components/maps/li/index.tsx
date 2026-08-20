import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import LIData from '../../../../src/maps/optional/LIECHTENSTEIN';

registerMapData('liechtenstein', LIData);

export default function LiechtensteinMap() {
    return (
        <BaseMap 
            mapId="liechtenstein"
            svgFileName="liechtenstein.svg"
            hoverColor="rgba(0, 43, 127, 0.35)"
            themeColorRgb="0, 43, 127"
            regionLabel="Commune"
        />
    );
}