import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import VCData from '../../../../src/maps/optional/SAINT_VINCENT_AND_THE_GRENADINES';

registerMapData('saint-vincent-and-the-grenadines', VCData);

export default function SaintVincentAndTheGrenadinesMap() {
    return (
        <BaseMap 
            mapId="saint-vincent-and-the-grenadines"
            svgFileName="saint-vincent-and-the-grenadines.svg"
            hoverColor="rgba(0, 51, 160, 0.35)"
            themeColorRgb="0, 51, 160"
            regionLabel="Parish"
        />
    );
}