import { registerMapData } from "svg-world-maps";
import TWData from "../../../maps/TAIWAN";
import BaseMap from "../BaseMap";

registerMapData("taiwan", TWData);

export default function TaiwanMap() {
  return (
    <BaseMap
      mapId="taiwan"
      svgFileName="taiwan.svg"
      hoverColor="rgba(254, 0, 0, 0.35)"
      themeColorRgb="254, 0, 0"
      regionLabel="County"
    />
  );
}
