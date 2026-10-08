import { registerMapData } from "svg-world-maps";
import NPData from "../../../maps/NEPAL";
import BaseMap from "../BaseMap";

registerMapData("nepal", NPData);

export default function NepalMap() {
  return (
    <BaseMap
      mapId="nepal"
      svgFileName="nepal.svg"
      hoverColor="rgba(220, 36, 31, 0.35)"
      themeColorRgb="220, 36, 31"
      regionLabel="Province"
    />
  );
}
