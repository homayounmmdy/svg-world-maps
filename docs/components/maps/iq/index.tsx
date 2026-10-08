import { registerMapData } from "svg-world-maps";
import IQData from "../../../maps/IRAQ";
import BaseMap from "../BaseMap";

registerMapData("iraq", IQData);

export default function IraqMap() {
  return (
    <BaseMap
      mapId="iraq"
      svgFileName="iraq.svg"
      hoverColor="rgba(206, 17, 38, 0.35)"
      themeColorRgb="206, 17, 38"
      regionLabel="Governorate"
    />
  );
}
