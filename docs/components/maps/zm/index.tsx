import { registerMapData } from "svg-world-maps";
import ZMData from "../../../maps/ZAMBIA";
import BaseMap from "../BaseMap";

registerMapData("zambia", ZMData);

export default function ZambiaMap() {
  return (
    <BaseMap
      mapId="zambia"
      svgFileName="zambia.svg"
      hoverColor="rgba(28, 151, 53, 0.35)"
      themeColorRgb="28, 151, 53"
      regionLabel="Province"
    />
  );
}
