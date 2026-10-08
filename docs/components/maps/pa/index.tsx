import { registerMapData } from "svg-world-maps";
import PAData from "../../../maps/PANAMA";
import BaseMap from "../BaseMap";

registerMapData("panama", PAData);

export default function PanamaMap() {
  return (
    <BaseMap
      mapId="panama"
      svgFileName="panama.svg"
      hoverColor="rgba(210, 16, 52, 0.35)"
      themeColorRgb="210, 16, 52"
      regionLabel="Province"
    />
  );
}
