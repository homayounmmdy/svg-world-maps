import { registerMapData } from "svg-world-maps";
import BNData from "../../../maps/BRUNEI";
import BaseMap from "../BaseMap";

registerMapData("brunei", BNData);

export default function BruneiMap() {
  return (
    <BaseMap
      mapId="brunei"
      svgFileName="brunei.svg"
      hoverColor="rgba(247, 209, 0, 0.35)"
      themeColorRgb="247, 209, 0"
      regionLabel="District"
    />
  );
}
