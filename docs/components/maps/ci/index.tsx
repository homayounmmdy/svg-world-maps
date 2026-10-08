import { registerMapData } from "svg-world-maps";
import CIData from "../../../maps/COTE_D_IVOIRE";
import BaseMap from "../BaseMap";

registerMapData("cte-divoire", CIData);

export default function CteDIvoireMap() {
  return (
    <BaseMap
      mapId="cte-divoire"
      svgFileName="cte-divoire.svg"
      hoverColor="rgba(247, 127, 0, 0.35)"
      themeColorRgb="247, 127, 0"
      regionLabel="District"
    />
  );
}
