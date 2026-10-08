import { registerMapData } from "svg-world-maps";
import SGData from "../../../maps/SINGAPORE";
import BaseMap from "../BaseMap";

registerMapData("singapore", SGData);

export default function SingaporeMap() {
  return (
    <BaseMap
      mapId="singapore"
      svgFileName="singapore.svg"
      hoverColor="rgba(238, 0, 0, 0.35)"
      themeColorRgb="238, 0, 0"
      regionLabel="Region"
    />
  );
}
