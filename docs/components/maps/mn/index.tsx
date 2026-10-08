import { registerMapData } from "svg-world-maps";
import MNData from "../../../maps/MONGOLIA";
import BaseMap from "../BaseMap";

registerMapData("mongolia", MNData);

export default function MongoliaMap() {
  return (
    <BaseMap
      mapId="mongolia"
      svgFileName="mongolia.svg"
      hoverColor="rgba(0, 51, 160, 0.35)"
      themeColorRgb="0, 51, 160"
      regionLabel="Province"
    />
  );
}
