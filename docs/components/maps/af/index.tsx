import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import afghanistanData from '../../../../src/maps/optional/AFGHANISTAN';

registerMapData('afghanistan', afghanistanData);

export default function AfghanistanMap() {
    return (
        <BaseMap 
            mapId="afghanistan"
            svgFileName="afghanistan.svg"
            hoverColor="rgba(0, 153, 51, 0.35)"
            themeColorRgb="0, 153, 51" // Afghan Green
            regionLabel="Province"
        />
    );
}