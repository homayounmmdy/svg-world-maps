import { registerMapData } from "svg-world-maps";
import GQData from "../../../maps/EQUATORIAL_GUINEA";
import BaseMap from "../BaseMap";

registerMapData("equatorialguinea", GQData);

export default function EquatorialguineaMap() {
  return (
    <BaseMap
      mapId="equatorialguinea"
      svgFileName="equatorialguinea.svg"
      hoverColor="rgba(0, 158, 48, 0.35)"
      themeColorRgb="0, 158, 48"
      regionLabel="Province"
    />
  );
}
