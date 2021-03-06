import React, {FunctionComponent, useState, useEffect} from "react";

import styled from "styled-components";
import {createContext} from "react";
import {TMapOptions, TPoint, TPointBounds} from "../type";
import { TMapTypeId } from "../enum";

declare global {
  let naver: any;
}

export interface INaverMap  extends TMapOptions {
  className?: string;
  width: string | number;
  height: string | number;
  mapTypeId?: TMapTypeId;
  onClick?: (e: { position: TPoint }) => void;
  onChangedZoom?: (zoom: number) => void;
  onChangedBounds?: (bounds: TPointBounds) => void;
  onMouseUp?: (bounds: any, string: any) => void;
}

export const NaverMapContext = createContext(null as any);

let NaverMap: FunctionComponent<INaverMap> = (props) => {
  const listeners = React.useRef<{ [listener: string]: (...args: any[]) => void }>({});

  listeners.current.onClick = function onClick(e: any) {
    props.onClick?.({
      position: {
        x: e.latlng.x,
        y: e.latlng.y
      },
    });
  }

  listeners.current.onChangedZoom = function onChangedZoom(zoom: any) {
    props.onChangedZoom?.(zoom);
  }

  listeners.current.onChangedBounds = function onChangedBounds(bounds: any) {
    const min = bounds.getMin();
    const max = bounds.getMax();
    props.onChangedBounds?.({
      minPoint: { x: min.x, y: min.y },
      maxPoint: { x: max.x, y: max.y },
    });
  }

  const [_map, setMap] = useState<any>(null);

  useEffect(() => {
    const mapOptions = {
      zoom: props.zoom,
      center: new naver.maps.LatLng(props.center ? { x: props.center.x, y: props.center.y } : { x: 33.3572421, y: 126.5322317})
    };

    const map = new naver.maps.Map('map', mapOptions);

    setMap(map);

    listeners.current.onMouseUp = () => {
      props.onMouseUp?.("event", map.getBounds());
    }

    naver.maps.Event.addListener(map, "click", listeners.current.onClick);
    naver.maps.Event.addListener(map, "bounds_changed", listeners.current.onChangedBounds);
    naver.maps.Event.addListener(map, "mouseup", listeners.current.onMouseUp);
    naver.maps.Event.addListener(map, "zoom_changed", listeners.current.onChangedZoom);
  }, []);

  useEffect(() => {
    return () => {
      naver.maps.Event.removeListener(_map, "click");
      naver.maps.Event.removeListener(_map, "bounds_changed");
      naver.maps.Event.removeListener(_map, "mouseup");
      naver.maps.Event.removeListener(_map, "zoom_changed");
    }
  }, []);

  useEffect(() => {
    _map?.setZoom(props.zoom);
  }, [props.zoom]);

  useEffect(() => {
    _map?.setCenter(props.center);
  }, [props.center]);

  // ?????? ?????? ??????
  useEffect(() => {
    _map?.setMapTypeId(naver.maps.MapTypeId[props.mapTypeId ?? "NORMAL"]);
  }, [props.mapTypeId])

  /**
   * Naver map
   * 1. ?????? ?????? (????????????, ????????????, ?????????, ?????????, ?????? +, -, ????????? - gps)
   * 2. ????????? ?????? ?????? (?????? ????????? ??????, ?????? ???????????? ?????? ??????)
   * 3. ????????? ??????
   * 4. ???????????????
   * 5. ????????? ?????? ????????????
   * 6. ????????? ?????? ????????????
   */

  return (
    <>
    <script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=rfwp6173ew&callback=initMap"></script>
      <NaverMapContext.Provider value={_map}>
        <div id="map" className={props.className}>
          {props.children}
        </div>
      </NaverMapContext.Provider>
    </>
  );
};

NaverMap.defaultProps = {
  center: {x: 33.3572421, y: 126.5322317},
  mapTypeId: "NORMAL",
}

NaverMap = styled(NaverMap)`
  width: ${({width}) => typeof width === "number" ? `${width}px` : width};
  height: ${({height}) => typeof height === "number" ? `${height}px` : height};
`
export default NaverMap;
