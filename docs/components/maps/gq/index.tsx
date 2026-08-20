import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import GQData from '../../../../src/maps/optional/EQUATORIAL_GUINEA';

registerMapData('equatorialguinea', GQData);

export default function EquatorialguineaMap() {
    return (
        <BaseMap 
            mapId="equatorialguinea"
            svgFileName="equatorialguinea.svg"
            hoverColor="rgba(0, 158, 48, 0.35)"
            themeColorRgb="0, 158, 48"
            regionLabel="Province"
        />
    );
}