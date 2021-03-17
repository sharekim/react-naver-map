import { useEffect, useContext, FunctionComponent, useState } from "react";
import { NaverMapContext } from "../Map";
import { TMarkerOptions, TPosition, TLatLng } from "../type";
import styled from "styled-components";

export interface INaverMarker extends TMarkerOptions {
  onClick?: (e: TLatLng) => void;
}

let NaverMarker: FunctionComponent<INaverMarker> = (props) => {
  const map = useContext(NaverMapContext);
  const [marker, setMarker] = useState<any>(null);

  useEffect(() => {
    if (map === null) return;

    setMarker(new naver.maps.Marker({
      ...props,
      map,
      position: new naver.maps.LatLng(props.position),
    }));

  }, [map]);

  useEffect(() => {
    if (marker === null) return;
    naver.maps.Event.addListener(marker, 'click', (e: any) => {
      props.onClick?.(e.coord);
    });
  }, [marker]);

  useEffect(() => {
    if (map === null) return;
    marker.setPosition(props.position);
  }, [props.position]);

  useEffect(() => {
    if (map === null) return;
    marker.setVisible(props.visible);
  }, [props.visible]);

  useEffect(() => {
    if (map === null) return;
    marker.setZIndex(props.zIndex);
  }, [props.zIndex]);

  useEffect(() => {
    if (map === null) return;
    marker.setTitle(props.title);
  }, [props.title]);

  useEffect(() => {
    if (map === null) return;
    marker.setShape(props.shape);
  }, [props.shape]);

  // useEffect(() => {
  //   if (map === null) return;
  //   marker.setOptions(props.shape);
  // }, [props.shape]);

  return null;
}

NaverMarker = styled(NaverMarker)`
`;

export default NaverMarker;
