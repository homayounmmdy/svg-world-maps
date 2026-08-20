import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import FJData from '../../../../src/maps/optional/FIJI';

registerMapData('fiji', FJData);

export default function FijiMap() {
    return (
        <BaseMap 
            mapId="fiji"
            svgFileName="fiji.svg"
            hoverColor="rgba(0, 56, 168, 0.35)"
            themeColorRgb="0, 56, 168"
            regionLabel="Division"
        />
    );
}