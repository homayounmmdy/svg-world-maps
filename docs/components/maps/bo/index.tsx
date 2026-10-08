import { registerMapData } from "svg-world-maps";
import BOData from "../../../maps/BOLIVIA";
import BaseMap from "../BaseMap";

registerMapData("bolivia", BOData);

export default function BoliviaMap() {
  return (
    <BaseMap
      mapId="bolivia"
      svgFileName="bolivia.svg"
      hoverColor="rgba(217, 45, 32, 0.35)"
      themeColorRgb="217, 45, 32"
      regionLabel="Department"
    />
  );
}
