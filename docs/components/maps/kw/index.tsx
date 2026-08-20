import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import KWData from '../../../../src/maps/optional/KUWAIT';

registerMapData('kuwait', KWData);

export default function KuwaitMap() {
    return (
        <BaseMap 
            mapId="kuwait"
            svgFileName="kuwait.svg"
            hoverColor="rgba(0, 123, 54, 0.35)"
            themeColorRgb="0, 123, 54"
            regionLabel="Governorate"
        />
    );
}