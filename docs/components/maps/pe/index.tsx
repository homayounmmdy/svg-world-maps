import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import PEData from '../../../../src/maps/optional/PERU';

registerMapData('peru', PEData);

export default function PeruMap() {
    return (
        <BaseMap 
            mapId="peru"
            svgFileName="peru.svg"
            hoverColor="rgba(217, 16, 35, 0.35)"
            themeColorRgb="217, 16, 35"
            regionLabel="Region"
        />
    );
}