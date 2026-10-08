import { registerMapData } from "svg-world-maps";
import NCData from "../../../maps/NEW_CALEDONIA";
import BaseMap from "../BaseMap";

registerMapData("newcaledonia", NCData);

export default function NewcaledoniaMap() {
  return (
    <BaseMap
      mapId="newcaledonia"
      svgFileName="newcaledonia.svg"
      hoverColor="rgba(238, 28, 39, 0.35)"
      themeColorRgb="238, 28, 39"
      regionLabel="Province"
    />
  );
}
