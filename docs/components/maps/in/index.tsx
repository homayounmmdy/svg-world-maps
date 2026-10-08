import { registerMapData } from "svg-world-maps";
import INData from "../../../maps/INDIA";
import BaseMap from "../BaseMap";

registerMapData("india", INData);

export default function IndiaMap() {
  return (
    <BaseMap
      mapId="india"
      svgFileName="india.svg"
      hoverColor="rgba(255, 153, 51, 0.35)"
      themeColorRgb="255, 153, 51"
      regionLabel="State"
    />
  );
}
