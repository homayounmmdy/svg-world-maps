import { registerMapData } from "svg-world-maps";
import STData from "../../../../src/maps/optional/SAO_TOME_AND_PRINCIPE";
import BaseMap from "../BaseMap";

registerMapData("sao_tome_and_principe", STData);

export default function SoTomAndPrncipeMap() {
  return (
    <BaseMap
      mapId="sao_tome_and_principe"
      svgFileName="sao_tome_and_principe.svg"
      hoverColor="rgba(0, 158, 48, 0.35)"
      themeColorRgb="0, 158, 48"
      regionLabel="District"
    />
  );
}
