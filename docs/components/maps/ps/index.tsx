import { registerMapData } from "svg-world-maps";
import PSData from "../../../maps/PALESTINE";
import BaseMap from "../BaseMap";

registerMapData("palestine", PSData);

export default function PalestineMap() {
  return (
    <BaseMap
      mapId="palestine"
      svgFileName="palestine.svg"
      hoverColor="rgba(206, 17, 38, 0.35)"
      themeColorRgb="206, 17, 38"
      regionLabel="Governorate"
    />
  );
}
