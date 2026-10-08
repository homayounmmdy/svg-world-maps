import { registerMapData } from "svg-world-maps";
import BDData from "../../../maps/BANGLADESH";
import BaseMap from "../BaseMap";

registerMapData("bangladesh", BDData);

export default function BangladeshMap() {
  return (
    <BaseMap
      mapId="bangladesh"
      svgFileName="bangladesh.svg"
      hoverColor="rgba(0, 106, 78, 0.35)"
      themeColorRgb="0, 106, 78"
      regionLabel="Division"
    />
  );
}
