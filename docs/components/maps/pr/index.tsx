import { registerMapData } from "svg-world-maps";
import PRData from "../../../maps/PUERTO_RICO";
import BaseMap from "../BaseMap";

registerMapData("puerto-rico", PRData);

export default function PuertoRicoMap() {
  return (
    <BaseMap
      mapId="puerto-rico"
      svgFileName="puerto-rico.svg"
      hoverColor="rgba(200, 16, 46, 0.35)"
      themeColorRgb="200, 16, 46"
      regionLabel="Municipality"
    />
  );
}
