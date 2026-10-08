import { registerMapData } from "svg-world-maps";
import LCData from "../../../maps/SAINT_LUCIA";
import BaseMap from "../BaseMap";

registerMapData("saint-lucia", LCData);

export default function SaintLuciaMap() {
  return (
    <BaseMap
      mapId="saint-lucia"
      svgFileName="saint-lucia.svg"
      hoverColor="rgba(0, 51, 160, 0.35)"
      themeColorRgb="0, 51, 160"
      regionLabel="Quarter"
    />
  );
}
