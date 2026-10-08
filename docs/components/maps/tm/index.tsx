import { registerMapData } from "svg-world-maps";
import TMData from "../../../maps/TURKMENISTAN";
import BaseMap from "../BaseMap";

registerMapData("turkmenistan", TMData);

export default function TurkmenistanMap() {
  return (
    <BaseMap
      mapId="turkmenistan"
      svgFileName="turkmenistan.svg"
      hoverColor="rgba(0, 158, 48, 0.35)"
      themeColorRgb="0, 158, 48"
      regionLabel="Region"
    />
  );
}
