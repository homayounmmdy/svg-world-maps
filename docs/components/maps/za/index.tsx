import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import ZAData from '../../../../src/maps/optional/SOUTH_AFRICA';

registerMapData('south-africa', ZAData);

export default function SouthAfricaMap() {
    return (
        <BaseMap 
            mapId="south-africa"
            svgFileName="south-africa.svg"
            hoverColor="rgba(0, 120, 73, 0.35)"
            themeColorRgb="0, 120, 73"
            regionLabel="Province"
        />
    );
}