import { registerMapData } from "svg-world-maps";
import UAData from "../../../maps/UKRAINE";
import BaseMap from "../BaseMap";

registerMapData("ukraine", UAData);

export default function UkraineMap() {
  return (
    <BaseMap
      mapId="ukraine"
      svgFileName="ukraine.svg"
      hoverColor="rgba(0, 87, 183, 0.35)"
      themeColorRgb="0, 87, 183"
      regionLabel="Oblast"
    />
  );
}
