import { registerMapData } from "svg-world-maps";
import SAData from "../../../maps/SAUDI_ARABIA";
import BaseMap from "../BaseMap";

registerMapData("saudi-arabia", SAData);

export default function SaudiArabiaMap() {
  return (
    <BaseMap
      mapId="saudi-arabia"
      svgFileName="saudi-arabia.svg"
      hoverColor="rgba(0, 105, 56, 0.35)"
      themeColorRgb="0, 105, 56"
      regionLabel="Region"
    />
  );
}
