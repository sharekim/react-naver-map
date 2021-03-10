import React, { FunctionComponent, useState, useEffect } from "react";

import styled from "styled-components";
import { createContext } from "react";
import { TMapTypeId } from "../enum";

declare global {
  let naver: any;
}

interface IMainPageProps {
  className?: string;
  width: string | number;
  height: string | number;
  center: { lat: number, lng: number };
  level: number;
  mapTypeId?: TMapTypeId;
}

export const NaverMapContext = createContext(null);

let NaverMap: FunctionComponent<IMainPageProps> = (props) => {
  const [_map, setMap] = useState<any>(null);

  useEffect(() => {
    initMap();
  }, []);

  useEffect(() => {
    _map?.setZoom(props.level);
  }, [props.level]);

  useEffect(() => {
    _map?.setCenter(props.center);
  }, [props.center]);

  // 지도 유형 설정
  useEffect(() => {
    _map?.setMapTypeId(naver.maps.MapTypeId[props.mapTypeId ?? "NORMAL"]);
  }, [props.mapTypeId])

  function initMap() {
    const mapOptions = {
      center: props.center,
      zoom: props.level,
    };

    setMap(new naver.maps.Map('map', mapOptions));
  }

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
      <NaverMapContext.Provider value={_map}>
        <div id="map" className={props.className}>
          {props.children}
        </div>
      </NaverMapContext.Provider>
    </>
  );
};

NaverMap.defaultProps = {
  center: { lat: 33.3572421, lng: 126.5322317 },
  mapTypeId: "NORMAL",
}

NaverMap = styled(NaverMap)`
  width: ${({ width }) => typeof width === "number" ? `${width}px` : width};
  height: ${({ height }) => typeof height === "number" ? `${height}px` : height};
`
export default NaverMap;
