import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import MXData from '../../../../src/maps/optional/MEXICO';

registerMapData('mexico', MXData);

export default function MexicoMap() {
    return (
        <BaseMap 
            mapId="mexico"
            svgFileName="mexico.svg"
            hoverColor="rgba(0, 103, 71, 0.35)"
            themeColorRgb="0, 103, 71"
            regionLabel="State"
        />
    );
}