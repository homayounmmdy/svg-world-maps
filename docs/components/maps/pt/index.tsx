import { registerMapData } from "svg-world-maps";
import PTData from "../../../maps/PORTUGAL";
import BaseMap from "../BaseMap";

registerMapData("portugal", PTData);

export default function PortugalMap() {
  return (
    <BaseMap
      mapId="portugal"
      svgFileName="portugal.svg"
      hoverColor="rgba(0, 102, 51, 0.35)"
      themeColorRgb="0, 102, 51"
      regionLabel="District"
    />
  );
}
