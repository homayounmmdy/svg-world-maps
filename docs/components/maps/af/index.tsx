import { registerMapData } from "svg-world-maps";
import afghanistanData from "../../../maps/AFGHANISTAN";
import BaseMap from "../BaseMap";

registerMapData("afghanistan", afghanistanData);

export default function AfghanistanMap() {
  return (
    <BaseMap
      mapId="afghanistan"
      svgFileName="afghanistan.svg"
      hoverColor="rgba(0, 153, 51, 0.35)"
      themeColorRgb="0, 153, 51" // Afghan Green
      regionLabel="Province"
    />
  );
}
