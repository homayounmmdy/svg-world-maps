import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import TGData from '../../../../src/maps/optional/TOGO';

registerMapData('togo', TGData);

export default function TogoMap() {
    return (
        <BaseMap 
            mapId="togo"
            svgFileName="togo.svg"
            hoverColor="rgba(0, 158, 48, 0.35)"
            themeColorRgb="0, 158, 48"
            regionLabel="Region"
        />
    );
}