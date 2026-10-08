import { registerMapData } from "svg-world-maps";
import LAData from "../../../maps/LAOS";
import BaseMap from "../BaseMap";

registerMapData("laos", LAData);

export default function LaosMap() {
  return (
    <BaseMap
      mapId="laos"
      svgFileName="laos.svg"
      hoverColor="rgba(174, 15, 29, 0.35)"
      themeColorRgb="174, 15, 29"
      regionLabel="Province"
    />
  );
}
