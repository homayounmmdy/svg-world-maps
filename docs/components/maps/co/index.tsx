import { registerMapData } from "svg-world-maps";
import COData from "../../../maps/COLOMBIA";
import BaseMap from "../BaseMap";

registerMapData("colombia", COData);

export default function ColombiaMap() {
  return (
    <BaseMap
      mapId="colombia"
      svgFileName="colombia.svg"
      hoverColor="rgba(252, 209, 22, 0.35)"
      themeColorRgb="252, 209, 22"
      regionLabel="Department"
    />
  );
}
