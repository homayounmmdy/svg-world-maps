import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import SOData from '../../../../src/maps/optional/SOMALIA';

registerMapData('somalia', SOData);

export default function SomaliaMap() {
    return (
        <BaseMap 
            mapId="somalia"
            svgFileName="somalia.svg"
            hoverColor="rgba(73, 162, 225, 0.35)"
            themeColorRgb="73, 162, 225"
            regionLabel="Region"
        />
    );
}