import { registerMapData } from "svg-world-maps";
import CZData from "../../../maps/CZECH_REPUBLIC";
import BaseMap from "../BaseMap";

registerMapData("czech-republic", CZData);

export default function CzechRepublicMap() {
  return (
    <BaseMap
      mapId="czech-republic"
      svgFileName="czech-republic.svg"
      hoverColor="rgba(174, 15, 29, 0.35)"
      themeColorRgb="174, 15, 29"
      regionLabel="Region"
    />
  );
}
