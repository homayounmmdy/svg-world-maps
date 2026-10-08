import { registerMapData } from "svg-world-maps";
import PNData from "../../../maps/PITCAIRN_ISLANDS";
import BaseMap from "../BaseMap";

registerMapData("pitcairn-islands", PNData);

export default function PitcairnIslandsMap() {
  return (
    <BaseMap
      mapId="pitcairn-islands"
      svgFileName="pitcairn-islands.svg"
      hoverColor="rgba(0, 51, 160, 0.35)"
      themeColorRgb="0, 51, 160"
      regionLabel="Settlement"
    />
  );
}
