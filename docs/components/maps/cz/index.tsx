import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import CZData from '../../../../src/maps/optional/CZECH_REPUBLIC';

registerMapData('czech-republic', CZData);

export default function CzechRepublicMap() {
    return (
        <BaseMap 
            mapId="czech-republic"
            svgFileName="czech-republic.svg"
            hoverColor="rgba(174, 15, 29, 0.35)"
            themeColorRgb="174, 15, 29"
            regionLabel="Region"
        />
    );
}