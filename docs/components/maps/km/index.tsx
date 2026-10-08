import { registerMapData } from "svg-world-maps";
import KMData from "../../../maps/COMOROS";
import BaseMap from "../BaseMap";

registerMapData("comoros", KMData);

export default function ComorosMap() {
  return (
    <BaseMap
      mapId="comoros"
      svgFileName="comoros.svg"
      hoverColor="rgba(0, 120, 60, 0.35)"
      themeColorRgb="0, 120, 60"
      regionLabel="Autonomous Island"
    />
  );
}
