import { registerMapData } from "svg-world-maps";
import CDData from "../../../../src/maps/optional/DRC";
import BaseMap from "../BaseMap";

registerMapData("democratic-republic-of-the-congo", CDData);

export default function DemocraticRepublicOfTheCongoMap() {
  return (
    <BaseMap
      mapId="democratic-republic-of-the-congo"
      svgFileName="democratic-republic-of-the-congo.svg"
      hoverColor="rgba(118, 208, 242, 0.35)"
      themeColorRgb="118, 208, 242"
      regionLabel="Province"
    />
  );
}
