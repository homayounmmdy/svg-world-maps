import { registerMapData } from "svg-world-maps";
import TGData from "../../../maps/TOGO";
import BaseMap from "../BaseMap";

registerMapData("togo", TGData);

export default function TogoMap() {
  return (
    <BaseMap
      mapId="togo"
      svgFileName="togo.svg"
      hoverColor="rgba(0, 158, 48, 0.35)"
      themeColorRgb="0, 158, 48"
      regionLabel="Region"
    />
  );
}
