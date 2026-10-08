import { registerMapData } from "svg-world-maps";
import CHData from "../../../maps/SWITZERLAND";
import BaseMap from "../BaseMap";

registerMapData("switzerland", CHData);

export default function SwitzerlandMap() {
  return (
    <BaseMap
      mapId="switzerland"
      svgFileName="switzerland.svg"
      hoverColor="rgba(255, 0, 0, 0.35)"
      themeColorRgb="255, 0, 0"
      regionLabel="Canton"
    />
  );
}
