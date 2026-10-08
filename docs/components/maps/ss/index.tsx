import { registerMapData } from "svg-world-maps";
import SSData from "../../../maps/SOUTH_SUDAN";
import BaseMap from "../BaseMap";

registerMapData("south-sudan", SSData);

export default function SouthSudanMap() {
  return (
    <BaseMap
      mapId="south-sudan"
      svgFileName="south-sudan.svg"
      hoverColor="rgba(0, 158, 48, 0.35)"
      themeColorRgb="0, 158, 48"
      regionLabel="State"
    />
  );
}
