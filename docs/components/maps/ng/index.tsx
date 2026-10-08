import { registerMapData } from "svg-world-maps";
import NGData from "../../../maps/NIGERIA";
import BaseMap from "../BaseMap";

registerMapData("nigeria", NGData);

export default function NigeriaMap() {
  return (
    <BaseMap
      mapId="nigeria"
      svgFileName="nigeria.svg"
      hoverColor="rgba(0, 135, 81, 0.35)"
      themeColorRgb="0, 135, 81"
      regionLabel="State"
    />
  );
}
