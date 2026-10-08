import { registerMapData } from "svg-world-maps";
import LBData from "../../../maps/LEBANON";
import BaseMap from "../BaseMap";

registerMapData("lebanon", LBData);

export default function LebanonMap() {
  return (
    <BaseMap
      mapId="lebanon"
      svgFileName="lebanon.svg"
      hoverColor="rgba(237, 28, 36, 0.35)"
      themeColorRgb="237, 28, 36"
      regionLabel="Governorate"
    />
  );
}
