import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import GDData from '../../../../src/maps/optional/GRENADA';

registerMapData('grenada', GDData);

export default function GrenadaMap() {
    return (
        <BaseMap 
            mapId="grenada"
            svgFileName="grenada.svg"
            hoverColor="rgba(0, 158, 48, 0.35)"
            themeColorRgb="0, 158, 48"
            regionLabel="Parish"
        />
    );
}