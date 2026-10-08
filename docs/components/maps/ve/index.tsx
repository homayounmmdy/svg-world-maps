import { registerMapData } from "svg-world-maps";
import VEData from "../../../maps/VENEZUELA";
import BaseMap from "../BaseMap";

registerMapData("venezuela", VEData);

export default function VenezuelaMap() {
  return (
    <BaseMap
      mapId="venezuela"
      svgFileName="venezuela.svg"
      hoverColor="rgba(252, 209, 22, 0.35)"
      themeColorRgb="252, 209, 22"
      regionLabel="State"
    />
  );
}
