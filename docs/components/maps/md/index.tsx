import { registerMapData } from "svg-world-maps";
import MDData from "../../../maps/MOLDOVA";
import BaseMap from "../BaseMap";

registerMapData("moldova", MDData);

export default function MoldovaMap() {
  return (
    <BaseMap
      mapId="moldova"
      svgFileName="moldova.svg"
      hoverColor="rgba(0, 51, 160, 0.35)"
      themeColorRgb="0, 51, 160"
      regionLabel="District"
    />
  );
}
