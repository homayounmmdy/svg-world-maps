import { registerMapData } from "svg-world-maps";
import GNData from "../../../maps/GUINEA";
import BaseMap from "../BaseMap";

registerMapData("guinea", GNData);

export default function GuineaMap() {
  return (
    <BaseMap
      mapId="guinea"
      svgFileName="guinea.svg"
      hoverColor="rgba(200, 16, 46, 0.35)"
      themeColorRgb="200, 16, 46"
      regionLabel="Region"
    />
  );
}
