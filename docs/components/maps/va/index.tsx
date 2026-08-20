import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import VAData from '../../../../src/maps/optional/VATICAN';

registerMapData('vatican', VAData);

export default function VaticanMap() {
    return (
        <BaseMap 
            mapId="vatican"
            svgFileName="vatican.svg"
            hoverColor="rgba(254, 218, 0, 0.35)"
            themeColorRgb="254, 218, 0"
            regionLabel="District"
        />
    );
}