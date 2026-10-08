import { registerMapData } from "svg-world-maps";
import BWData from "../../../maps/BOTSWANA";
import BaseMap from "../BaseMap";

registerMapData("botswana", BWData);

export default function BotswanaMap() {
  return (
    <BaseMap
      mapId="botswana"
      svgFileName="botswana.svg"
      hoverColor="rgba(114, 188, 232, 0.35)"
      themeColorRgb="114, 188, 232"
      regionLabel="District"
    />
  );
}
