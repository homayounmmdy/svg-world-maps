import { registerMapData } from "svg-world-maps";
import NRData from "../../../maps/NAURU";
import BaseMap from "../BaseMap";

registerMapData("nauru", NRData);

export default function NauruMap() {
  return (
    <BaseMap
      mapId="nauru"
      svgFileName="nauru.svg"
      hoverColor="rgba(0, 51, 160, 0.35)"
      themeColorRgb="0, 51, 160"
      regionLabel="District"
    />
  );
}
