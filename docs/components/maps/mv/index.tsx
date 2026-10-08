import { registerMapData } from "svg-world-maps";
import MVData from "../../../maps/MALDIVES";
import BaseMap from "../BaseMap";

registerMapData("maldives", MVData);

export default function MaldivesMap() {
  return (
    <BaseMap
      mapId="maldives"
      svgFileName="maldives.svg"
      hoverColor="rgba(218, 41, 28, 0.35)"
      themeColorRgb="218, 41, 28"
      regionLabel="Atoll"
    />
  );
}
