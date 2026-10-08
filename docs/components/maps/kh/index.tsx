import { registerMapData } from "svg-world-maps";
import KHData from "../../../maps/CAMBODIA";
import BaseMap from "../BaseMap";

registerMapData("cambodia", KHData);

export default function CambodiaMap() {
  return (
    <BaseMap
      mapId="cambodia"
      svgFileName="cambodia.svg"
      hoverColor="rgba(225, 0, 21, 0.35)"
      themeColorRgb="225, 0, 21"
      regionLabel="Province"
    />
  );
}
