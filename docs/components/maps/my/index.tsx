import { registerMapData } from "svg-world-maps";
import MYData from "../../../maps/MALAYSIA";
import BaseMap from "../BaseMap";

registerMapData("malaysia", MYData);

export default function MalaysiaMap() {
  return (
    <BaseMap
      mapId="malaysia"
      svgFileName="malaysia.svg"
      hoverColor="rgba(0, 40, 104, 0.35)"
      themeColorRgb="0, 40, 104"
      regionLabel="State"
    />
  );
}
