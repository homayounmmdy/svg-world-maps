import { registerMapData } from "svg-world-maps";
import FOData from "../../../maps/FAEROE_ISLANDS";
import BaseMap from "../BaseMap";

registerMapData("faeroeislands", FOData);

export default function FaeroeislandsMap() {
  return (
    <BaseMap
      mapId="faeroeislands"
      svgFileName="faeroeislands.svg"
      hoverColor="rgba(0, 51, 160, 0.35)"
      themeColorRgb="0, 51, 160"
      regionLabel="Municipality"
    />
  );
}
