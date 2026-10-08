import { registerMapData } from "svg-world-maps";
import LYData from "../../../maps/LIBYA";
import BaseMap from "../BaseMap";

registerMapData("libya", LYData);

export default function LibyaMap() {
  return (
    <BaseMap
      mapId="libya"
      svgFileName="libya.svg"
      hoverColor="rgba(238, 28, 39, 0.35)"
      themeColorRgb="238, 28, 39"
      regionLabel="District"
    />
  );
}
