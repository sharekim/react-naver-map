import { useEffect, useContext, FunctionComponent } from "react";
import { NaverMapContext } from "../Map";

interface INaverMarker {
  position: { lat: number, lng: number };
}

const NaverMarker: FunctionComponent<INaverMarker> = (props) => {
  const map = useContext(NaverMapContext);

  useEffect(() => {
    if (map === null) return;
    const marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(props.position),
      map: map,
    });
  }, [map]);

  return null;
}

export default NaverMarker;
