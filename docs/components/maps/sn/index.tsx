import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import SNData from '../../../../src/maps/optional/SENEGAL';

registerMapData('senegal', SNData);

export default function SenegalMap() {
    return (
        <BaseMap 
            mapId="senegal"
            svgFileName="senegal.svg"
            hoverColor="rgba(0, 134, 69, 0.35)"
            themeColorRgb="0, 134, 69"
            regionLabel="Region"
        />
    );
}