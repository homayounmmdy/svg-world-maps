import { registerMapData } from "svg-world-maps";
import RWData from "../../../maps/RWANDA";
import BaseMap from "../BaseMap";

registerMapData("rwanda", RWData);

export default function RwandaMap() {
  return (
    <BaseMap
      mapId="rwanda"
      svgFileName="rwanda.svg"
      hoverColor="rgba(0, 120, 60, 0.35)"
      themeColorRgb="0, 120, 60"
      regionLabel="Province"
    />
  );
}
