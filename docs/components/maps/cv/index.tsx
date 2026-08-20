import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import CVData from '../../../../src/maps/optional/CAPE_VERDE';

registerMapData('capeverde', CVData);

export default function CapeverdeMap() {
    return (
        <BaseMap 
            mapId="capeverde"
            svgFileName="capeverde.svg"
            hoverColor="rgba(0, 44, 125, 0.35)"
            themeColorRgb="0, 44, 125"
            regionLabel="Municipality"
        />
    );
}