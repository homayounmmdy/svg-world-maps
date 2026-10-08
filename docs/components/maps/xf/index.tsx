import { registerMapData } from "svg-world-maps";
import xfData from "../../../maps/AFRICA";
import BaseMap from "../BaseMap";

registerMapData("africa", xfData);

export default function AfricaMap() {
  return (
    <BaseMap
      mapId="africa"
      svgFileName="africa.svg"
      hoverColor="rgba(0, 158, 73, 0.35)" // Pan-African Green
      themeColorRgb="0, 158, 73"
      regionLabel="Country"
    />
  );
}
