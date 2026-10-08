import { registerMapData } from "svg-world-maps";
import GHData from "../../../maps/GHANA";
import BaseMap from "../BaseMap";

registerMapData("ghana", GHData);

export default function GhanaMap() {
  return (
    <BaseMap
      mapId="ghana"
      svgFileName="ghana.svg"
      hoverColor="rgba(206, 17, 38, 0.35)"
      themeColorRgb="206, 17, 38"
      regionLabel="Region"
    />
  );
}
