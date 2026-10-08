import { registerMapData } from "svg-world-maps";
import EEData from "../../../maps/ESTONIA";
import BaseMap from "../BaseMap";

registerMapData("estonia", EEData);

export default function EstoniaMap() {
  return (
    <BaseMap
      mapId="estonia"
      svgFileName="estonia.svg"
      hoverColor="rgba(0, 114, 188, 0.35)"
      themeColorRgb="0, 114, 188"
      regionLabel="County"
    />
  );
}
