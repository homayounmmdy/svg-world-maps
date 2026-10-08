import { registerMapData } from "svg-world-maps";
import CUData from "../../../maps/CUBA";
import BaseMap from "../BaseMap";

registerMapData("cuba", CUData);

export default function CubaMap() {
  return (
    <BaseMap
      mapId="cuba"
      svgFileName="cuba.svg"
      hoverColor="rgba(200, 16, 46, 0.35)"
      themeColorRgb="200, 16, 46"
      regionLabel="Province"
    />
  );
}
