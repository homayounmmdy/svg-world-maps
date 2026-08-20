import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import GWData from '../../../../src/maps/optional/GUINEA-BISSAU';

registerMapData('guinea-bissau', GWData);

export default function GuineabissauMap() {
    return (
        <BaseMap 
            mapId="guinea-bissau"
            svgFileName="guinea-bissau.svg"
            hoverColor="rgba(239, 42, 46, 0.35)"
            themeColorRgb="239, 42, 46"
            regionLabel="Region"
        />
    );
}