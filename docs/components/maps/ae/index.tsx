import { registerMapData } from "svg-world-maps";
import AEData from "../../../maps/UAE";
import BaseMap from "../BaseMap";

registerMapData("uae", AEData);

export default function UAEMap() {
  return (
    <BaseMap
      mapId="uae"
      svgFileName="uae.svg"
      hoverColor="rgba(0, 115, 47, 0.35)"
      themeColorRgb="0, 115, 47"
      regionLabel="Emirate"
    />
  );
}
