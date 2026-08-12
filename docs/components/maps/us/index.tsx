import { registerMapData } from "svg-world-maps";
import usaData from "../../../../src/maps/optional/USA";
import BaseMap from "../BaseMap";

registerMapData("usa", usaData);

export default function UnitedStatesMap() {
  return (
    <BaseMap
      mapId="usa"
      svgFileName="usa.svg"
      hoverColor="rgba(179, 25, 46, 0.35)"
      themeColorRgb="179, 25, 46" // US Red
      regionLabel="State"
    />
  );
}
