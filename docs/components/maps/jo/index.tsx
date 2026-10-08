import { registerMapData } from "svg-world-maps";
import JOData from "../../../maps/JORDAN";
import BaseMap from "../BaseMap";

registerMapData("jordan", JOData);

export default function JordanMap() {
  return (
    <BaseMap
      mapId="jordan"
      svgFileName="jordan.svg"
      hoverColor="rgba(206, 17, 38, 0.35)"
      themeColorRgb="206, 17, 38"
      regionLabel="Governorate"
    />
  );
}
