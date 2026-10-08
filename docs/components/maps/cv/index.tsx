import { registerMapData } from "svg-world-maps";
import CVData from "../../../maps/CAPE_VERDE";
import BaseMap from "../BaseMap";

registerMapData("capeverde", CVData);

export default function CapeverdeMap() {
  return (
    <BaseMap
      mapId="capeverde"
      svgFileName="capeverde.svg"
      hoverColor="rgba(0, 44, 125, 0.35)"
      themeColorRgb="0, 44, 125"
      regionLabel="Municipality"
    />
  );
}
