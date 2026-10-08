import { registerMapData } from "svg-world-maps";
import PLData from "../../../maps/POLAND";
import BaseMap from "../BaseMap";

registerMapData("poland", PLData);

export default function PolandMap() {
  return (
    <BaseMap
      mapId="poland"
      svgFileName="poland.svg"
      hoverColor="rgba(220, 20, 60, 0.35)"
      themeColorRgb="220, 20, 60"
      regionLabel="Voivodeship"
    />
  );
}
