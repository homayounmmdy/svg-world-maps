import { registerMapData } from "svg-world-maps";
import EHData from "../../../maps/WESTERN_SAHARA";
import BaseMap from "../BaseMap";

registerMapData("western-sahara", EHData);

export default function WesternSaharaMap() {
  return (
    <BaseMap
      mapId="western-sahara"
      svgFileName="western-sahara.svg"
      hoverColor="rgba(0, 120, 60, 0.35)"
      themeColorRgb="0, 120, 60"
      regionLabel="Region"
    />
  );
}
