import { registerMapData } from "svg-world-maps";
import LUData from "../../../maps/LUXEMBOURG";
import BaseMap from "../BaseMap";

registerMapData("luxembourg", LUData);

export default function LuxembourgMap() {
  return (
    <BaseMap
      mapId="luxembourg"
      svgFileName="luxembourg.svg"
      hoverColor="rgba(237, 28, 36, 0.35)"
      themeColorRgb="237, 28, 36"
      regionLabel="Canton"
    />
  );
}
