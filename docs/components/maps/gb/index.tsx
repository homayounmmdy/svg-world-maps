import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import GBData from '../../../../src/maps/optional/GB';

registerMapData('great-britain', GBData);

export default function GreatBritainMap() {
    return (
        <BaseMap 
            mapId="great-britain"
            svgFileName="great-britain.svg"
            hoverColor="rgba(1, 33, 105, 0.35)"
            themeColorRgb="1, 33, 105"
            regionLabel="Country"
        />
    );
}