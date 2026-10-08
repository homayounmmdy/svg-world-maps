import { registerMapData } from "svg-world-maps";
import ZAData from "../../../maps/SOUTH_AFRICA";
import BaseMap from "../BaseMap";

registerMapData("south-africa", ZAData);

export default function SouthAfricaMap() {
  return (
    <BaseMap
      mapId="south-africa"
      svgFileName="south-africa.svg"
      hoverColor="rgba(0, 120, 73, 0.35)"
      themeColorRgb="0, 120, 73"
      regionLabel="Province"
    />
  );
}
