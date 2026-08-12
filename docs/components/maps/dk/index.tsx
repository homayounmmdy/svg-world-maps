import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import DKData from '../../../../src/maps/optional/DENMARK';

registerMapData('denmark', DKData);

export default function DenmarkMap() {
    return (
        <BaseMap 
            mapId="denmark"
            svgFileName="denmark.svg"
            hoverColor="rgba(198, 12, 48, 0.35)"
            themeColorRgb="198, 12, 48"
            regionLabel="Region"
        />
    );
}