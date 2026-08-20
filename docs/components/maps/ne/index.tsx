import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import NEData from '../../../../src/maps/optional/NIGER';

registerMapData('niger', NEData);

export default function NigerMap() {
    return (
        <BaseMap 
            mapId="niger"
            svgFileName="niger.svg"
            hoverColor="rgba(0, 120, 60, 0.35)"
            themeColorRgb="0, 120, 60"
            regionLabel="Region"
        />
    );
}