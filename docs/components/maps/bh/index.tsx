import { registerMapData } from "svg-world-maps";
import bhData from "../../../maps/BAHRAIN";
import BaseMap from "../BaseMap";

registerMapData("bahrain", bhData);

export default function BahrainMap() {
  return (
    <BaseMap
      mapId="bahrain"
      svgFileName="bahrain.svg"
      hoverColor="rgba(218, 41, 46, 0.35)" // Bahraini Red
      themeColorRgb="218, 41, 46"
      regionLabel="Governorate"
    />
  );
}
