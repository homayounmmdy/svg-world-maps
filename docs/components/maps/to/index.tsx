import { registerMapData } from "svg-world-maps";
import TOData from "../../../maps/TONGA";
import BaseMap from "../BaseMap";

registerMapData("tonga", TOData);

export default function TongaMap() {
  return (
    <BaseMap
      mapId="tonga"
      svgFileName="tonga.svg"
      hoverColor="rgba(200, 16, 46, 0.35)"
      themeColorRgb="200, 16, 46"
      regionLabel="Division"
    />
  );
}
