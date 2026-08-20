import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import PGData from '../../../../src/maps/optional/PAPUA_NEW_GUINEA';

registerMapData('papua-new-guinea', PGData);

export default function PapuaNewGuineaMap() {
    return (
        <BaseMap 
            mapId="papua-new-guinea"
            svgFileName="papua-new-guinea.svg"
            hoverColor="rgba(255, 204, 0, 0.35)"
            themeColorRgb="255, 204, 0"
            regionLabel="Province"
        />
    );
}