import { registerMapData } from "svg-world-maps";
import UGData from "../../../maps/UGANDA";
import BaseMap from "../BaseMap";

registerMapData("uganda", UGData);

export default function UgandaMap() {
  return (
    <BaseMap
      mapId="uganda"
      svgFileName="uganda.svg"
      hoverColor="rgba(218, 41, 28, 0.35)"
      themeColorRgb="218, 41, 28"
      regionLabel="District"
    />
  );
}
