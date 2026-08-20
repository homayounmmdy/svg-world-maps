import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import BGData from '../../../../src/maps/optional/BULGARIA';

registerMapData('bulgaria', BGData);

export default function BulgariaMap() {
    return (
        <BaseMap 
            mapId="bulgaria"
            svgFileName="bulgaria.svg"
            hoverColor="rgba(0, 150, 110, 0.35)"
            themeColorRgb="0, 150, 110"
            regionLabel="Province"
        />
    );
}