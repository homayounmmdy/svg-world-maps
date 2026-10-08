import { registerMapData } from "svg-world-maps";
import THData from "../../../maps/TUNISIA";
import BaseMap from "../BaseMap";

registerMapData("tunisia", THData);

export default function TunisiaMap() {
  return (
    <BaseMap
      mapId="tunisia"
      svgFileName="tunisia.svg"
      hoverColor="rgba(231, 0, 23, 0.35)"
      themeColorRgb="231, 0, 23"
      regionLabel="Governorate"
    />
  );
}
