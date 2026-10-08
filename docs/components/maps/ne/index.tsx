import { registerMapData } from "svg-world-maps";
import NEData from "../../../maps/NIGER";
import BaseMap from "../BaseMap";

registerMapData("niger", NEData);

export default function NigerMap() {
  return (
    <BaseMap
      mapId="niger"
      svgFileName="niger.svg"
      hoverColor="rgba(0, 120, 60, 0.35)"
      themeColorRgb="0, 120, 60"
      regionLabel="Region"
    />
  );
}
