import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import MNData from '../../../../src/maps/optional/MONGOLIA';

registerMapData('mongolia', MNData);

export default function MongoliaMap() {
    return (
        <BaseMap 
            mapId="mongolia"
            svgFileName="mongolia.svg"
            hoverColor="rgba(0, 51, 160, 0.35)"
            themeColorRgb="0, 51, 160"
            regionLabel="Province"
        />
    );
}