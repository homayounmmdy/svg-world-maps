import { registerMapData } from "svg-world-maps";
import UZData from "../../../maps/UZBEKISTAN";
import BaseMap from "../BaseMap";

registerMapData("uzbekistan", UZData);

export default function UzbekistanMap() {
  return (
    <BaseMap
      mapId="uzbekistan"
      svgFileName="uzbekistan.svg"
      hoverColor="rgba(0, 51, 160, 0.35)"
      themeColorRgb="0, 51, 160"
      regionLabel="Region"
    />
  );
}
