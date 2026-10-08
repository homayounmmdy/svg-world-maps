import { registerMapData } from "svg-world-maps";
import GMData from "../../../maps/THE_GAMBIA";
import BaseMap from "../BaseMap";

registerMapData("the-gambia", GMData);

export default function TheGambiaMap() {
  return (
    <BaseMap
      mapId="the-gambia"
      svgFileName="the-gambia.svg"
      hoverColor="rgba(200, 16, 46, 0.35)"
      themeColorRgb="200, 16, 46"
      regionLabel="Division"
    />
  );
}
