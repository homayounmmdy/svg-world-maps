import { registerMapData } from "svg-world-maps";
import CAData from "../../../maps/CANADA";
import BaseMap from "../BaseMap";

registerMapData("canada", CAData);

export default function CanadaMap() {
  return (
    <BaseMap
      mapId="canada"
      svgFileName="canada.svg"
      hoverColor="rgba(255, 0, 0, 0.35)"
      themeColorRgb="255, 0, 0"
      regionLabel="Province"
    />
  );
}
