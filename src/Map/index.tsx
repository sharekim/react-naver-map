import React, {FunctionComponent, useState, useEffect} from "react";

import styled from "styled-components";
import {createContext} from "react";
import {TMapOptions, TPoint} from "../type";

declare global {
  let naver: any;
}

export interface INaverMap  extends TMapOptions {
  className?: string;
  width: string | number;
  height: string | number;
  onClick?: (e: { position: TPoint }) => void;
  onChangedBounds?: (bounds: any) => void;
}

export const NaverMapContext = createContext(null as any);

let NaverMap: FunctionComponent<INaverMap> = (props) => {
  const listeners = React.useRef<{ [listener: string]: (...args: any[]) => void }>({});

  listeners.current.onClick = function onClick(e: any) {
    console.log(e);
    props.onClick?.({
      position: {
        x: e.latlng.x,
        y: e.latlng.y
      },
    });
  }

  listeners.current.onChangedBounds = function onChangedBounds(bounds: any) {
    console.log(bounds);
    props.onChangedBounds?.({
      bounds,
    })
  }

  const [_map, setMap] = useState<any>(null);

  useEffect(() => {
    const mapOptions = {
      zoom: 18,
      center: new naver.maps.LatLng(props.center ? { x: props.center.x, y: props.center.y } : { x: 33.3572421, y: 126.5322317})
    };

    const map = new naver.maps.Map('map', mapOptions);

    setMap(map);

    naver.maps.Event.addListener(map, "click", listeners.current.onClick);
    naver.maps.Event.addListener(map, "bounds_changed", listeners.current.onChangedBounds);
  }, []);

  useEffect(() => {
    return () => {
      naver.maps.Event.removeListener(_map, "click");
      naver.maps.Event.removeListener(_map, "bounds_changed");
    }
  }, []);

  useEffect(() => {
    _map?.setZoom(props.zoom);
  }, [props.zoom]);

  useEffect(() => {
    _map?.setCenter(props.center);
  }, [props.center]);

  // 지도 유형 설정
  useEffect(() => {
    _map?.setMapTypeId(naver.maps.MapTypeId[props.mapTypeId ?? "NORMAL"]);
  }, [props.mapTypeId])

  /**
   * Naver map
   * 1. 지도 조작 (일반지도, 위성지도, 지적도, 로드뷰, 레벨 +, -, 모바일 - gps)
   * 2. 커스텀 마커 표시 (클릭 가능한 마커, 지도 클릭으로 마커 생성)
   * 3. 폴리곤 표시
   * 4. 클러스터링
   * 5. 주소로 위치 받아오기
   * 6. 위치로 주소 받아오기
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
