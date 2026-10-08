import { registerMapData } from "svg-world-maps";
import PEData from "../../../maps/PERU";
import BaseMap from "../BaseMap";

registerMapData("peru", PEData);

export default function PeruMap() {
  return (
    <BaseMap
      mapId="peru"
      svgFileName="peru.svg"
      hoverColor="rgba(217, 16, 35, 0.35)"
      themeColorRgb="217, 16, 35"
      regionLabel="Region"
    />
  );
}
