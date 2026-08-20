import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import BFData from '../../../../src/maps/optional/BURKINA_FASO';

registerMapData('burkinafaso', BFData);

export default function BurkinafasoMap() {
    return (
        <BaseMap 
            mapId="burkinafaso"
            svgFileName="burkinafaso.svg"
            hoverColor="rgba(239, 42, 46, 0.35)"
            themeColorRgb="239, 42, 46"
            regionLabel="Province"
        />
    );
}