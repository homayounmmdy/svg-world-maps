import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import BWData from '../../../../src/maps/optional/BOTSWANA';

registerMapData('botswana', BWData);

export default function BotswanaMap() {
    return (
        <BaseMap 
            mapId="botswana"
            svgFileName="botswana.svg"
            hoverColor="rgba(114, 188, 232, 0.35)"
            themeColorRgb="114, 188, 232"
            regionLabel="District"
        />
    );
}