import { registerMapData } from "svg-world-maps";
import beData from "../../../maps/BELGIUM";
import BaseMap from "../BaseMap";

registerMapData("belgium", beData);

export default function BelgiumMap() {
  return (
    <BaseMap
      mapId="belgium"
      svgFileName="belgium.svg"
      hoverColor="rgba(253, 218, 36, 0.35)" // Belgian Gold
      themeColorRgb="253, 218, 36"
      regionLabel="Province"
    />
  );
}
