import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import EHData from '../../../../src/maps/optional/WESTERN_SAHARA';

registerMapData('western-sahara', EHData);

export default function WesternSaharaMap() {
    return (
        <BaseMap 
            mapId="western-sahara"
            svgFileName="western-sahara.svg"
            hoverColor="rgba(0, 120, 60, 0.35)"
            themeColorRgb="0, 120, 60"
            regionLabel="Region"
        />
    );
}