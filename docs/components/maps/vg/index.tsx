import { registerMapData } from "svg-world-maps";
import VGData from "../../../maps/BRITISH_VIRGIN_ISLANDS";
import BaseMap from "../BaseMap";

registerMapData("british-virgin-islands", VGData);

export default function BritishVirginIslandsMap() {
  return (
    <BaseMap
      mapId="british-virgin-islands"
      svgFileName="british-virgin-islands.svg"
      hoverColor="rgba(0, 51, 160, 0.35)"
      themeColorRgb="0, 51, 160"
      regionLabel="District"
    />
  );
}
