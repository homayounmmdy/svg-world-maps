import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import NZData from '../../../../src/maps/optional/NEW_ZEALAND';

registerMapData('new-zealand', NZData);

export default function NewZealandMap() {
    return (
        <BaseMap 
            mapId="new-zealand"
            svgFileName="new-zealand.svg"
            hoverColor="rgba(0, 36, 125, 0.35)"
            themeColorRgb="0, 36, 125"
            regionLabel="Region"
        />
    );
}