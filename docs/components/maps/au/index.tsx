import { registerMapData } from "svg-world-maps";
import auData from "../../../../src/maps/optional/AUSTRALIA";
import BaseMap from "../BaseMap";

registerMapData("australia", auData);

export default function AustraliaMap() {
  return (
    <BaseMap
      mapId="australia"
      svgFileName="australia.svg"
      hoverColor="rgba(228, 0, 43, 0.35)" // Australian Red
      themeColorRgb="228, 0, 43"
      regionLabel="State"
    />
  );
}
