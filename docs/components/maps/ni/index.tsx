import { registerMapData } from "svg-world-maps";
import NIData from "../../../maps/NICARAGUA";
import BaseMap from "../BaseMap";

registerMapData("nicaragua", NIData);

export default function NicaraguaMap() {
  return (
    <BaseMap
      mapId="nicaragua"
      svgFileName="nicaragua.svg"
      hoverColor="rgba(0, 112, 184, 0.35)"
      themeColorRgb="0, 112, 184"
      regionLabel="Department"
    />
  );
}
