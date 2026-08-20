import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import THData from '../../../../src/maps/optional/TUNISIA';

registerMapData('tunisia', THData);

export default function TunisiaMap() {
    return (
        <BaseMap 
            mapId="tunisia"
            svgFileName="tunisia.svg"
            hoverColor="rgba(231, 0, 23, 0.35)"
            themeColorRgb="231, 0, 23"
            regionLabel="Governorate"
        />
    );
}