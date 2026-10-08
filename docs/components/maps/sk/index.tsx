import { registerMapData } from "svg-world-maps";
import SKData from "../../../maps/SLOVAKIA";
import BaseMap from "../BaseMap";

registerMapData("slovakia", SKData);

export default function SlovakiaMap() {
  return (
    <BaseMap
      mapId="slovakia"
      svgFileName="slovakia.svg"
      hoverColor="rgba(11, 78, 162, 0.35)"
      themeColorRgb="11, 78, 162"
      regionLabel="Region"
    />
  );
}
