import { registerMapData } from "svg-world-maps";
import LVData from "../../../maps/LATVIA";
import BaseMap from "../BaseMap";

registerMapData("latvia", LVData);

export default function LatviaMap() {
  return (
    <BaseMap
      mapId="latvia"
      svgFileName="latvia.svg"
      hoverColor="rgba(155, 0, 45, 0.35)"
      themeColorRgb="155, 0, 45"
      regionLabel="Municipality"
    />
  );
}
