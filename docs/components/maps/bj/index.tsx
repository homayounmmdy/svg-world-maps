import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import BJData from '../../../../src/maps/optional/BENIN';

registerMapData('benin', BJData);

export default function BeninMap() {
    return (
        <BaseMap 
            mapId="benin"
            svgFileName="benin.svg"
            hoverColor="rgba(252, 209, 22, 0.35)"
            themeColorRgb="252, 209, 22"
            regionLabel="Department"
        />
    );
}