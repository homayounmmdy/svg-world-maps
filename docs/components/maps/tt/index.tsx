import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import TTData from '../../../../src/maps/optional/TRINIDAD_AND_TOBAGO';

registerMapData('trinidadandtobago', TTData);

export default function TrinidadandtobagoMap() {
    return (
        <BaseMap 
            mapId="trinidadandtobago"
            svgFileName="trinidadandtobago.svg"
            hoverColor="rgba(200, 16, 46, 0.35)"
            themeColorRgb="200, 16, 46"
            regionLabel="Region"
        />
    );
}