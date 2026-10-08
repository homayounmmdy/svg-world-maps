import { registerMapData } from "svg-world-maps";
import TDData from "../../../maps/CHAD";
import BaseMap from "../BaseMap";

registerMapData("chad", TDData);

export default function ChadMap() {
  return (
    <BaseMap
      mapId="chad"
      svgFileName="chad.svg"
      hoverColor="rgba(0, 42, 135, 0.35)"
      themeColorRgb="0, 42, 135"
      regionLabel="Region"
    />
  );
}
