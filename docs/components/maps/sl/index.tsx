import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import SLData from '../../../../src/maps/optional/SIERRA_LEONE';

registerMapData('sierra-leone', SLData);

export default function SierraLeoneMap() {
    return (
        <BaseMap 
            mapId="sierra-leone"
            svgFileName="sierra-leone.svg"
            hoverColor="rgba(0, 158, 48, 0.35)"
            themeColorRgb="0, 158, 48"
            regionLabel="Province"
        />
    );
}