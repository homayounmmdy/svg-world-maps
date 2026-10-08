import { registerMapData } from "svg-world-maps";
import FRData from "../../../maps/FRANCE";
import BaseMap from "../BaseMap";

registerMapData("france", FRData);

export default function FranceMap() {
  return (
    <BaseMap
      mapId="france"
      svgFileName="france.svg"
      hoverColor="rgba(0, 35, 149, 0.35)"
      themeColorRgb="0, 35, 149"
      regionLabel="Region"
    />
  );
}
