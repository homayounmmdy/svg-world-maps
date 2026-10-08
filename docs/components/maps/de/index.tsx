import { registerMapData } from "svg-world-maps";
import DEData from "../../../maps/GERMANY";
import BaseMap from "../BaseMap";

registerMapData("germany", DEData);

export default function GermanyMap() {
  return (
    <BaseMap
      mapId="germany"
      svgFileName="germany.svg"
      hoverColor="rgba(255, 206, 0, 0.35)"
      themeColorRgb="255, 206, 0"
      regionLabel="State"
    />
  );
}
