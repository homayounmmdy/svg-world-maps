import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import PAData from '../../../../src/maps/optional/PANAMA';

registerMapData('panama', PAData);

export default function PanamaMap() {
    return (
        <BaseMap 
            mapId="panama"
            svgFileName="panama.svg"
            hoverColor="rgba(210, 16, 52, 0.35)"
            themeColorRgb="210, 16, 52"
            regionLabel="Province"
        />
    );
}