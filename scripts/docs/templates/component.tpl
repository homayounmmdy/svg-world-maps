import BaseMap from "../BaseMap";
import { registerMapData } from "svg-world-maps";
import {{codeUpper}}Data from '../../../../src/maps/optional/{{dataFile}}';

registerMapData('{{mapId}}', {{codeUpper}}Data);

export default function {{componentName}}() {
    return (
        <BaseMap 
            mapId="{{mapId}}"
            svgFileName="{{svgFileName}}"
            hoverColor="{{hoverColor}}"
            themeColorRgb="{{themeColorRgb}}"
            regionLabel="{{regionLabel}}"
        />
    );
}