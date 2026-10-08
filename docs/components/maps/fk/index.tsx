import { registerMapData } from "svg-world-maps";
import FKData from "../../../maps/FALKLAND_ISLANDS";
import BaseMap from "../BaseMap";

registerMapData("falklandislands", FKData);

export default function FalklandislandsMap() {
  return (
    <BaseMap
      mapId="falklandislands"
      svgFileName="falklandislands.svg"
      hoverColor="rgba(0, 33, 115, 0.35)"
      themeColorRgb="0, 33, 115"
      regionLabel="Settlement"
    />
  );
}
