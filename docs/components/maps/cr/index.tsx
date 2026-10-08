import { registerMapData } from "svg-world-maps";
import CRData from "../../../maps/COSTA_RICA";
import BaseMap from "../BaseMap";

registerMapData("costarica", CRData);

export default function CostaricaMap() {
  return (
    <BaseMap
      mapId="costarica"
      svgFileName="costarica.svg"
      hoverColor="rgba(0, 43, 127, 0.35)"
      themeColorRgb="0, 43, 127"
      regionLabel="Province"
    />
  );
}
