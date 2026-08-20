import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import MRData from '../../../../src/maps/optional/MAURITANIA';

registerMapData('mauritania', MRData);

export default function MauritaniaMap() {
    return (
        <BaseMap 
            mapId="mauritania"
            svgFileName="mauritania.svg"
            hoverColor="rgba(0, 98, 51, 0.35)"
            themeColorRgb="0, 98, 51"
            regionLabel="Region"
        />
    );
}