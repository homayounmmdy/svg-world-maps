import { registerMapData } from "svg-world-maps";
import ECData from "../../../maps/ECUADOR";
import BaseMap from "../BaseMap";

registerMapData("ecuador", ECData);

export default function EcuadorMap() {
  return (
    <BaseMap
      mapId="ecuador"
      svgFileName="ecuador.svg"
      hoverColor="rgba(255, 209, 0, 0.35)"
      themeColorRgb="255, 209, 0"
      regionLabel="Province"
    />
  );
}
