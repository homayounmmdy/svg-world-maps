import { registerMapData } from "svg-world-maps";
import MKData from "../../../maps/MACEDONIA";
import BaseMap from "../BaseMap";

registerMapData("macedonia", MKData);

export default function MacedoniaMap() {
  return (
    <BaseMap
      mapId="macedonia"
      svgFileName="macedonia.svg"
      hoverColor="rgba(210, 28, 38, 0.35)"
      themeColorRgb="210, 28, 38"
      regionLabel="Municipality"
    />
  );
}
