import { registerMapData } from "svg-world-maps";
import PYData from "../../../maps/PARAGUAY";
import BaseMap from "../BaseMap";

registerMapData("paraguay", PYData);

export default function ParaguayMap() {
  return (
    <BaseMap
      mapId="paraguay"
      svgFileName="paraguay.svg"
      hoverColor="rgba(213, 43, 30, 0.35)"
      themeColorRgb="213, 43, 30"
      regionLabel="Department"
    />
  );
}
