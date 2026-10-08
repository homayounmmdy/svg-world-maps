import { registerMapData } from "svg-world-maps";
import NOData from "../../../maps/NORWAY";
import BaseMap from "../BaseMap";

registerMapData("norway", NOData);

export default function NorwayMap() {
  return (
    <BaseMap
      mapId="norway"
      svgFileName="norway.svg"
      hoverColor="rgba(186, 12, 47, 0.35)"
      themeColorRgb="186, 12, 47"
      regionLabel="County"
    />
  );
}
