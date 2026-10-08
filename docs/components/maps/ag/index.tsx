import { registerMapData } from "svg-world-maps";
import AGData from "../../../maps/ANTIGUA_AND_BARBUDA";
import BaseMap from "../BaseMap";

registerMapData("antigua-and-barbuda", AGData);

export default function AntiguaAndBarbudaMap() {
  return (
    <BaseMap
      mapId="antigua-and-barbuda"
      svgFileName="antigua-and-barbuda.svg"
      hoverColor="rgba(200, 16, 46, 0.35)"
      themeColorRgb="200, 16, 46"
      regionLabel="Parish"
    />
  );
}
