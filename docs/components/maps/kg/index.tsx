import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import KGData from '../../../../src/maps/optional/KYRGYZSTAN';

registerMapData('kyrgyzstan', KGData);

export default function KyrgyzstanMap() {
    return (
        <BaseMap 
            mapId="kyrgyzstan"
            svgFileName="kyrgyzstan.svg"
            hoverColor="rgba(238, 28, 39, 0.35)"
            themeColorRgb="238, 28, 39"
            regionLabel="Region"
        />
    );
}