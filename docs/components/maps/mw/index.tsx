import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import MWData from '../../../../src/maps/optional/MALAWI';

registerMapData('malawi', MWData);

export default function MalawiMap() {
    return (
        <BaseMap 
            mapId="malawi"
            svgFileName="malawi.svg"
            hoverColor="rgba(206, 17, 38, 0.35)"
            themeColorRgb="206, 17, 38"
            regionLabel="District"
        />
    );
}