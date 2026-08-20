import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import VUData from '../../../../src/maps/optional/VANUATU';

registerMapData('vanuatu', VUData);

export default function VanuatuMap() {
    return (
        <BaseMap 
            mapId="vanuatu"
            svgFileName="vanuatu.svg"
            hoverColor="rgba(200, 16, 46, 0.35)"
            themeColorRgb="200, 16, 46"
            regionLabel="Province"
        />
    );
}