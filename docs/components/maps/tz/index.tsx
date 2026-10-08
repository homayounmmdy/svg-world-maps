import { registerMapData } from "svg-world-maps";
import TZData from "../../../maps/TANZANIA";
import BaseMap from "../BaseMap";

registerMapData("tanzania", TZData);

export default function TanzaniaMap() {
  return (
    <BaseMap
      mapId="tanzania"
      svgFileName="tanzania.svg"
      hoverColor="rgba(23, 139, 50, 0.35)"
      themeColorRgb="23, 139, 50"
      regionLabel="Region"
    />
  );
}
