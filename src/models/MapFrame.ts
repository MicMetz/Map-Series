import { ArcMap } from "./ArcMap";

export interface MapFrame extends ArcMap {
  icon_url: string;
  id: string;
  url: string;
}
