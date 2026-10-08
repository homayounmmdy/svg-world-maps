import { registerMapData } from "svg-world-maps";
import TRData from "../../../maps/TURKEY";
import BaseMap from "../BaseMap";

registerMapData("turkey", TRData);

export default function TurkeyMap() {
  return (
    <BaseMap
      mapId="turkey"
      svgFileName="turkey.svg"
      hoverColor="rgba(227, 10, 23, 0.35)"
      themeColorRgb="227, 10, 23"
      regionLabel="Province"
    />
  );
}
