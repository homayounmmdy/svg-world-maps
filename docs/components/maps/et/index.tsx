import { registerMapData } from "svg-world-maps";
import ETData from "../../../maps/ETHIOPIA";
import BaseMap from "../BaseMap";

registerMapData("ethiopia", ETData);

export default function EthiopiaMap() {
  return (
    <BaseMap
      mapId="ethiopia"
      svgFileName="ethiopia.svg"
      hoverColor="rgba(0, 158, 48, 0.35)"
      themeColorRgb="0, 158, 48"
      regionLabel="Region"
    />
  );
}
