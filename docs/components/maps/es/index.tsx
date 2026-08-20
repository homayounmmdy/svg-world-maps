import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import ESData from '../../../../src/maps/optional/SPAIN';

registerMapData('spain', ESData);

export default function SpainMap() {
    return (
        <BaseMap 
            mapId="spain"
            svgFileName="spain.svg"
            hoverColor="rgba(173, 22, 43, 0.35)"
            themeColorRgb="173, 22, 43"
            regionLabel="Autonomous Community"
        />
    );
}