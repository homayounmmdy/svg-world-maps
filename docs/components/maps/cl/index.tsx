import { registerMapData } from "svg-world-maps";
import CLData from "../../../maps/CHILE";
import BaseMap from "../BaseMap";

registerMapData("chile", CLData);

export default function ChileMap() {
  return (
    <BaseMap
      mapId="chile"
      svgFileName="chile.svg"
      hoverColor="rgba(213, 43, 30, 0.35)"
      themeColorRgb="213, 43, 30"
      regionLabel="Region"
    />
  );
}
