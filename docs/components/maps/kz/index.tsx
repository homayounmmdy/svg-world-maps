import { registerMapData } from "svg-world-maps";
import KZData from "../../../maps/KAZAKHSTAN";
import BaseMap from "../BaseMap";

registerMapData("kazakhstan", KZData);

export default function KazakhstanMap() {
  return (
    <BaseMap
      mapId="kazakhstan"
      svgFileName="kazakhstan.svg"
      hoverColor="rgba(0, 158, 204, 0.35)"
      themeColorRgb="0, 158, 204"
      regionLabel="Region"
    />
  );
}
