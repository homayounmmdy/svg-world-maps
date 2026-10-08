import { registerMapData } from "svg-world-maps";
import SYData from "../../../maps/SYRIA";
import BaseMap from "../BaseMap";

registerMapData("syria", SYData);

export default function SyriaMap() {
  return (
    <BaseMap
      mapId="syria"
      svgFileName="syria.svg"
      hoverColor="rgba(206, 17, 38, 0.35)"
      themeColorRgb="206, 17, 38"
      regionLabel="Governorate"
    />
  );
}
