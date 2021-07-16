import React, { useEffect, useContext, FunctionComponent, useState, useMemo } from "react";
import { NaverMapContext } from "../Map";
import { TMarkerOptions, TPosition, TLatLng, TPoint, THtmlIcon } from "../type";
import styled from "styled-components";
import useDidMountEffect from "../utils";
import ReactDOM from "react-dom";


export interface INaverMarker extends TMarkerOptions {
  element?: any;
  icon?: TMarkerOptions["icon"],
  onClick?: (e: TPoint) => void;
  onDragEnd?: (e: TPoint) => void;
  onIdle?: (e: any) => void;
}

let NaverMarker: FunctionComponent<INaverMarker> = (props) => {
  const map = useContext(NaverMapContext);
  const [marker, setMarker] = useState<any>(null);
  
  const content = useMemo(() => {
    return document.createElement("div");
  }, [props.element]);

  useEffect(() => {
    if (map === null) return;

    setMarker(new naver.maps.Marker({
      ...props,
      map,
      position: new naver.maps.LatLng(props.position),
      icon: typeof props.icon !== "string" ? {
        ...props.icon,
        content: props.element ? content : undefined
      } : undefined
    }));

    return () => {
      marker.setMap(null);
    }
  }, [map]);

  useDidMountEffect(() => {
    if (marker === null) return;
    naver.maps.Event.addListener(marker, 'click', (e: any) => {
      props.onClick?.({
        y: e.coord._lat,
        x: e.coord._lng,
      });
    });
    naver.maps.Event.addListener(marker, 'dragend', (e: any) => {
      props.onDragEnd?.({
        y: e.coord._lat,
        x: e.coord._lng,
      });
    });
    naver.maps.Event.addListener(marker, 'idle', (e: any) => {
      props.onIdle?.({

      })
      console.log(e);
    });

    return () => {
      naver.maps.Event.removeListiner(marker, 'click');
      naver.maps.Event.removeListiner(marker, 'dragend');
      naver.maps.Event.removeListiner(marker, 'idle');
    }
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

  return <>{ReactDOM.createPortal(props.children, content)}</>;
}

NaverMarker = styled(NaverMarker)`
`;

export default NaverMarker;
