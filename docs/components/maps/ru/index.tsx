import { registerMapData } from "svg-world-maps";
import RUData from "../../../maps/RUSSIA";
import BaseMap from "../BaseMap";

registerMapData("russia", RUData);

export default function RussiaMap() {
  return (
    <BaseMap
      mapId="russia"
      svgFileName="russia.svg"
      hoverColor="rgba(213, 43, 30, 0.35)"
      themeColorRgb="213, 43, 30"
      regionLabel="Federal Subject"
    />
  );
}
