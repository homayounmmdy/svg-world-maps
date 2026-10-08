import { registerMapData } from "svg-world-maps";
import CFData from "../../../maps/CENTRAL_AFRICAN_REPUBLIC";
import BaseMap from "../BaseMap";

registerMapData("central-african-republic", CFData);

export default function CentralAfricanRepublicMap() {
  return (
    <BaseMap
      mapId="central-african-republic"
      svgFileName="central-african-republic.svg"
      hoverColor="rgba(33, 93, 168, 0.35)"
      themeColorRgb="33, 93, 168"
      regionLabel="Prefecture"
    />
  );
}
