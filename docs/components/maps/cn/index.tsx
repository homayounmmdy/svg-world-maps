import { registerMapData } from "svg-world-maps";
import CNData from "../../../maps/CHINA";
import BaseMap from "../BaseMap";

registerMapData("china", CNData);

export default function ChinaMap() {
  return (
    <BaseMap
      mapId="china"
      svgFileName="china.svg"
      hoverColor="rgba(238, 28, 39, 0.35)"
      themeColorRgb="238, 28, 39"
      regionLabel="Province"
    />
  );
}
