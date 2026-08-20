import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import AZData from '../../../../src/maps/optional/AZERBAIJAN';

registerMapData('azerbaijan', AZData);

export default function AzerbaijanMap() {
    return (
        <BaseMap 
            mapId="azerbaijan"
            svgFileName="azerbaijan.svg"
            hoverColor="rgba(0, 181, 173, 0.35)"
            themeColorRgb="0, 181, 173"
            regionLabel="District"
        />
    );
}