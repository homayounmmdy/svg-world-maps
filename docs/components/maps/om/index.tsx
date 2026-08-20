import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import OMData from '../../../../src/maps/optional/OMAN';

registerMapData('oman', OMData);

export default function OmanMap() {
    return (
        <BaseMap 
            mapId="oman"
            svgFileName="oman.svg"
            hoverColor="rgba(210, 16, 52, 0.35)"
            themeColorRgb="210, 16, 52"
            regionLabel="Governorate"
        />
    );
}