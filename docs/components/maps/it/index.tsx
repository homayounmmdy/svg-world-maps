import { registerMapData } from "svg-world-maps";
import ITData from "../../../maps/ITALY";
import BaseMap from "../BaseMap";

registerMapData("italy", ITData);

export default function ItalyMap() {
  return (
    <BaseMap
      mapId="italy"
      svgFileName="italy.svg"
      hoverColor="rgba(0, 146, 70, 0.35)"
      themeColorRgb="0, 146, 70"
      regionLabel="Region"
    />
  );
}
