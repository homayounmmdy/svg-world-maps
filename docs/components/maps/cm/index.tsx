import { registerMapData } from "svg-world-maps";
import CMData from "../../../maps/CAMEROON";
import BaseMap from "../BaseMap";

registerMapData("cameroon", CMData);

export default function CameroonMap() {
  return (
    <BaseMap
      mapId="cameroon"
      svgFileName="cameroon.svg"
      hoverColor="rgba(0, 122, 54, 0.35)"
      themeColorRgb="0, 122, 54"
      regionLabel="Region"
    />
  );
}
