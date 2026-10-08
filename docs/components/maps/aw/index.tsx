import { registerMapData } from "svg-world-maps";
import AWData from "../../../maps/ARUBA";
import BaseMap from "../BaseMap";

registerMapData("aruba", AWData);

export default function ArubaMap() {
  return (
    <BaseMap
      mapId="aruba"
      svgFileName="aruba.svg"
      hoverColor="rgba(0, 51, 160, 0.35)"
      themeColorRgb="0, 51, 160"
      regionLabel="Region"
    />
  );
}
