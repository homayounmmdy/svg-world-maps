import { registerMapData } from "svg-world-maps";
import MEData from "../../../maps/MONTENEGRO";
import BaseMap from "../BaseMap";

registerMapData("montenegro", MEData);

export default function MontenegroMap() {
  return (
    <BaseMap
      mapId="montenegro"
      svgFileName="montenegro.svg"
      hoverColor="rgba(210, 16, 52, 0.35)"
      themeColorRgb="210, 16, 52"
      regionLabel="Municipality"
    />
  );
}
