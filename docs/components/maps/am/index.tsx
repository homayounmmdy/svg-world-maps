import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import amData from '../../../../src/maps/optional/ARMENIA';

registerMapData('armenia', amData);

export default function ArmeniaMap() {
    return (
        <BaseMap 
            mapId="armenia"
            svgFileName="armenia.svg"
            hoverColor="rgba(242, 168, 0, 0.35)" // Armenian Apricot/Orange
            themeColorRgb="242, 168, 0"
            regionLabel="Province"
        />
    );
}