import { registerMapData } from "svg-world-maps";
import GBData from "../../../maps/GB";
import BaseMap from "../BaseMap";

registerMapData("great-britain", GBData);

export default function GreatBritainMap() {
  return (
    <BaseMap
      mapId="great-britain"
      svgFileName="great-britain.svg"
      hoverColor="rgba(1, 33, 105, 0.35)"
      themeColorRgb="1, 33, 105"
      regionLabel="Country"
    />
  );
}
