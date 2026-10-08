import { registerMapData } from "svg-world-maps";
import GYData from "../../../maps/GUYANA";
import BaseMap from "../BaseMap";

registerMapData("guyana", GYData);

export default function GuyanaMap() {
  return (
    <BaseMap
      mapId="guyana"
      svgFileName="guyana.svg"
      hoverColor="rgba(0, 158, 48, 0.35)"
      themeColorRgb="0, 158, 48"
      regionLabel="Region"
    />
  );
}
