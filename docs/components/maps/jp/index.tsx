import { registerMapData } from "svg-world-maps";
import JPData from "../../../maps/JAPAN";
import BaseMap from "../BaseMap";

registerMapData("japan", JPData);

export default function JapanMap() {
  return (
    <BaseMap
      mapId="japan"
      svgFileName="japan.svg"
      hoverColor="rgba(187, 0, 0, 0.35)"
      themeColorRgb="187, 0, 0"
      regionLabel="Prefecture"
    />
  );
}
