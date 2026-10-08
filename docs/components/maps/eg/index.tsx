import { registerMapData } from "svg-world-maps";
import EGData from "../../../maps/EGYPT";
import BaseMap from "../BaseMap";

registerMapData("egypt", EGData);

export default function EgyptMap() {
  return (
    <BaseMap
      mapId="egypt"
      svgFileName="egypt.svg"
      hoverColor="rgba(206, 17, 38, 0.35)"
      themeColorRgb="206, 17, 38"
      regionLabel="Governorate"
    />
  );
}
