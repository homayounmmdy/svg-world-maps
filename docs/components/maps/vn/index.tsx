import { registerMapData } from "svg-world-maps";
import VNData from "../../../maps/VIETNAM";
import BaseMap from "../BaseMap";

registerMapData("vietnam", VNData);

export default function VietnamMap() {
  return (
    <BaseMap
      mapId="vietnam"
      svgFileName="vietnam.svg"
      hoverColor="rgba(218, 37, 29, 0.35)"
      themeColorRgb="218, 37, 29"
      regionLabel="Province"
    />
  );
}
