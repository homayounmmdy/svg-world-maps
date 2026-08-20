import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import MFData from '../../../../src/maps/optional/SAINT_MARTIN_FRENCH';

registerMapData('saint-martin-french', MFData);

export default function SaintMartinFrenchMap() {
    return (
        <BaseMap 
            mapId="saint-martin-french"
            svgFileName="saint-martin-french.svg"
            hoverColor="rgba(0, 51, 160, 0.35)"
            themeColorRgb="0, 51, 160"
            regionLabel="Collectivity"
        />
    );
}