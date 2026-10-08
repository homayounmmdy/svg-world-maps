import { registerMapData } from "svg-world-maps";
import GLData from "../../../maps/GREENLAND";
import BaseMap from "../BaseMap";

registerMapData("greenland", GLData);

export default function GreenlandMap() {
  return (
    <BaseMap
      mapId="greenland"
      svgFileName="greenland.svg"
      hoverColor="rgba(200, 16, 46, 0.35)"
      themeColorRgb="200, 16, 46"
      regionLabel="Municipality"
    />
  );
}
