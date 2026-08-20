import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import CFData from '../../../../src/maps/optional/CENTRAL_AFRICAN_REPUBLIC';

registerMapData('central-african-republic', CFData);

export default function CentralAfricanRepublicMap() {
    return (
        <BaseMap 
            mapId="central-african-republic"
            svgFileName="central-african-republic.svg"
            hoverColor="rgba(33, 93, 168, 0.35)"
            themeColorRgb="33, 93, 168"
            regionLabel="Prefecture"
        />
    );
}