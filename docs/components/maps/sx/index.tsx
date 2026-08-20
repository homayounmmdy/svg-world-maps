import { registerMapData } from "svg-world-maps";
import SXData from "../../../../src/maps/optional/saint_martin_dutch";
import BaseMap from "../BaseMap";

registerMapData("saint_martin_dutch", SXData);

export default function SaintMartinDutchMap() {
  return (
    <BaseMap
      mapId="saint_martin_dutch"
      svgFileName="saint_martin_dutch.svg"
      hoverColor="rgba(238, 28, 39, 0.35)"
      themeColorRgb="238, 28, 39"
      regionLabel="Region"
    />
  );
}
