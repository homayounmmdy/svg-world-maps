import { registerMapData } from "svg-world-maps";
import PKData from "../../../maps/PAKISTAN";
import BaseMap from "../BaseMap";

registerMapData("pakistan", PKData);

export default function PakistanMap() {
  return (
    <BaseMap
      mapId="pakistan"
      svgFileName="pakistan.svg"
      hoverColor="rgba(1, 65, 28, 0.35)"
      themeColorRgb="1, 65, 28"
      regionLabel="Province"
    />
  );
}
