import { registerMapData } from "svg-world-maps";
import AZData from "../../../maps/AZERBAIJAN";
import BaseMap from "../BaseMap";

registerMapData("azerbaijan", AZData);

export default function AzerbaijanMap() {
  return (
    <BaseMap
      mapId="azerbaijan"
      svgFileName="azerbaijan.svg"
      hoverColor="rgba(0, 181, 173, 0.35)"
      themeColorRgb="0, 181, 173"
      regionLabel="District"
    />
  );
}
