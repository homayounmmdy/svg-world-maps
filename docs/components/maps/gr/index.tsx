import { registerMapData } from "svg-world-maps";
import GRData from "../../../maps/GREECE";
import BaseMap from "../BaseMap";

registerMapData("greece", GRData);

export default function GreeceMap() {
  return (
    <BaseMap
      mapId="greece"
      svgFileName="greece.svg"
      hoverColor="rgba(0, 85, 164, 0.35)"
      themeColorRgb="0, 85, 164"
      regionLabel="Region"
    />
  );
}
