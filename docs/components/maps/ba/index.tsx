import { registerMapData } from "svg-world-maps";
import BAData from "../../../maps/BOSNIA_AND_HERZEGOVINA";
import BaseMap from "../BaseMap";

registerMapData("bosnia-and-herzegovina", BAData);

export default function BosniaAndHerzegovinaMap() {
  return (
    <BaseMap
      mapId="bosnia-and-herzegovina"
      svgFileName="bosnia-and-herzegovina.svg"
      hoverColor="rgba(0, 33, 128, 0.35)"
      themeColorRgb="0, 33, 128"
      regionLabel="Entity"
    />
  );
}
