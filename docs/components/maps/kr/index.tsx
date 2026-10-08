import { registerMapData } from "svg-world-maps";
import KRData from "../../../maps/SOUTH_KOREA";
import BaseMap from "../BaseMap";

registerMapData("south-korea", KRData);

export default function SouthKoreaMap() {
  return (
    <BaseMap
      mapId="south-korea"
      svgFileName="south-korea.svg"
      hoverColor="rgba(205, 46, 58, 0.35)"
      themeColorRgb="205, 46, 58"
      regionLabel="Province"
    />
  );
}
