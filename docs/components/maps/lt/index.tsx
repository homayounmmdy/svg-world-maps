import { registerMapData } from "svg-world-maps";
import LTData from "../../../maps/LITHUANIA";
import BaseMap from "../BaseMap";

registerMapData("lithuania", LTData);

export default function LithuaniaMap() {
  return (
    <BaseMap
      mapId="lithuania"
      svgFileName="lithuania.svg"
      hoverColor="rgba(253, 185, 19, 0.35)"
      themeColorRgb="253, 185, 19"
      regionLabel="County"
    />
  );
}
