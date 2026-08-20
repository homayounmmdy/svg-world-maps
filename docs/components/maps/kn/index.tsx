import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import KNData from '../../../../src/maps/optional/SAINT_KITTS_AND_NEVIS';

registerMapData('saint-kitts-and-nevis', KNData);

export default function SaintKittsAndNevisMap() {
    return (
        <BaseMap 
            mapId="saint-kitts-and-nevis"
            svgFileName="saint-kitts-and-nevis.svg"
            hoverColor="rgba(200, 16, 46, 0.35)"
            themeColorRgb="200, 16, 46"
            regionLabel="Parish"
        />
    );
}