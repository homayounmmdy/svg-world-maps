import { registerMapData } from "svg-world-maps";
import IEData from "../../../maps/IRELAND";
import BaseMap from "../BaseMap";

registerMapData("ireland", IEData);

export default function IrelandMap() {
  return (
    <BaseMap
      mapId="ireland"
      svgFileName="ireland.svg"
      hoverColor="rgba(0, 154, 68, 0.35)"
      themeColorRgb="0, 154, 68"
      regionLabel="County"
    />
  );
}
