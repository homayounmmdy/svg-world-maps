import { registerMapData } from "svg-world-maps";
import LSData from "../../../maps/LESOTHO";
import BaseMap from "../BaseMap";

registerMapData("lesotho", LSData);

export default function LesothoMap() {
  return (
    <BaseMap
      mapId="lesotho"
      svgFileName="lesotho.svg"
      hoverColor="rgba(0, 33, 115, 0.35)"
      themeColorRgb="0, 33, 115"
      regionLabel="District"
    />
  );
}
