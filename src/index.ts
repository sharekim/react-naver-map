import { FunctionComponent } from "react";
import NaverMap, { INaverMap } from "./Map";
import NaverMarker, { INaverMarker } from "./Marker";

const Maps: {
  NaverMap: FunctionComponent<INaverMap>,
  NaverMarker: FunctionComponent<INaverMarker>,
} = {
  NaverMap,
  NaverMarker,
};

export = Maps;