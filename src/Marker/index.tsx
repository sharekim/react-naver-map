import { useEffect, useContext, FunctionComponent, useState } from "react";
import { NaverMapContext } from "../Map";
import { TMarkerOptions, TPosition, TLatLng } from "../type";
import styled from "styled-components";
import useDidMountEffect from "../utils";

export interface INaverMarker extends TMarkerOptions {
  onClick?: (e: TLatLng) => void;
  onDragEnd?: (e: TLatLng) => void;
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

  useDidMountEffect(() => {
    if (marker === null) return;
    naver.maps.Event.addListener(marker, 'click', (e: any) => {
      props.onClick?.({
        lat: e.coord._lat,
        lng: e.coord._lng,
      });
    });
    naver.maps.Event.addListener(marker, 'dragend', (e: any) => {
      props.onDragEnd?.({
        lat: e.coord._lat,
        lng: e.coord._lng,
      });
    });
  }, [marker]);

  useDidMountEffect(() => {
    if (map === null || marker === null) return;
    marker.setPosition(props.position);
  }, [props.position]);

  useDidMountEffect(() => {
    if (map === null || marker === null) return;
    marker.setVisible(props.visible);
  }, [props.visible]);

  useDidMountEffect(() => {
    if (map === null || marker === null) return;
    marker.setZIndex(props.zIndex);
  }, [props.zIndex]);

  useDidMountEffect(() => {
    if (map === null || marker === null) return;
    marker.setTitle(props.title);
  }, [props.title]);

  useDidMountEffect(() => {
    if (map === null || marker === null) return;
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
