import { registerMapData } from "svg-world-maps";
import BYData from "../../../maps/BELARUS";
import BaseMap from "../BaseMap";

registerMapData("belarus", BYData);

export default function BelarusMap() {
  return (
    <BaseMap
      mapId="belarus"
      svgFileName="belarus.svg"
      hoverColor="rgba(210, 39, 48, 0.35)"
      themeColorRgb="210, 39, 48"
      regionLabel="Region"
    />
  );
}
