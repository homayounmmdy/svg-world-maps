import { registerMapData } from "svg-world-maps";
import KGData from "../../../maps/KYRGYZSTAN";
import BaseMap from "../BaseMap";

registerMapData("kyrgyzstan", KGData);

export default function KyrgyzstanMap() {
  return (
    <BaseMap
      mapId="kyrgyzstan"
      svgFileName="kyrgyzstan.svg"
      hoverColor="rgba(238, 28, 39, 0.35)"
      themeColorRgb="238, 28, 39"
      regionLabel="Region"
    />
  );
}
