import { registerMapData } from "svg-world-maps";
import DJData from "../../../maps/DJIBOUTI";
import BaseMap from "../BaseMap";

registerMapData("djibouti", DJData);

export default function DjiboutiMap() {
  return (
    <BaseMap
      mapId="djibouti"
      svgFileName="djibouti.svg"
      hoverColor="rgba(110, 173, 212, 0.35)"
      themeColorRgb="110, 173, 212"
      regionLabel="Region"
    />
  );
}
