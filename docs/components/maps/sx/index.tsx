import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import SXData from '../../../../src/maps/optional/SAINT_MARTIN_(DUTCH)';

registerMapData('saint-martin-dutch', SXData);

export default function SaintMartinDutchMap() {
    return (
        <BaseMap 
            mapId="saint-martin-dutch"
            svgFileName="saint-martin-dutch.svg"
            hoverColor="rgba(238, 28, 39, 0.35)"
            themeColorRgb="238, 28, 39"
            regionLabel="Region"
        />
    );
}