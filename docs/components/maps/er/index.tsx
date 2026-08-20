import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import ERData from '../../../../src/maps/optional/ERITREA';

registerMapData('eritrea', ERData);

export default function EritreaMap() {
    return (
        <BaseMap 
            mapId="eritrea"
            svgFileName="eritrea.svg"
            hoverColor="rgba(255, 210, 0, 0.35)"
            themeColorRgb="255, 210, 0"
            regionLabel="Region"
        />
    );
}