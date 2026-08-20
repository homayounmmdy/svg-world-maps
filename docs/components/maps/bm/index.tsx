import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import BMData from '../../../../src/maps/optional/BERMUDA';

registerMapData('bermuda', BMData);

export default function BermudaMap() {
    return (
        <BaseMap 
            mapId="bermuda"
            svgFileName="bermuda.svg"
            hoverColor="rgba(200, 16, 46, 0.35)"
            themeColorRgb="200, 16, 46"
            regionLabel="Parish"
        />
    );
}