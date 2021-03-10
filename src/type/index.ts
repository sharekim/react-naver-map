import { TControlerPosition, TMapTypeId, TMapTypeControlStyle } from "../enum";

export type TSize = { width: number, height: number };

export type TPosition = {
  lat: number,
  lng: number
};

export type TLatLngObjectLiteral = TPosition;

// PointObjectLiteral와 같음
export type TPoint = {
  x: number,
  y: number
};

export type TMapPadding = {
  top: number,
  right: number,
  bottom: number,
  left: number,
}

export type TPointObjectLiteral = TPoint;
export type TLatLng = TPosition;

export type TImageIcon = {
  url: string;
  size?: TSize;
  scaledSize?: TSize;
  origin?: TPoint;
  anchor?: TPoint;
};

export type THtmlIcon = {
  content: string | HTMLElement;
  size?: TSize;
  anchor?: TPoint;
};

export type TSymbolIcon = {
  path: string;
  style?: string;
  radius?: string;
  fillColor?: string;
  fillOpacity?: number;
  strokeColor?: string;
  strokeWeight?: number;
  strokeOpacity?: number;
  anchor?: TPoint;
};

export type TMarkerOptions = {
  position: TPosition;
  icon?: string | TImageIcon | THtmlIcon | TSymbolIcon,
  shape?: any,
  title?: string,
  cursor?: string,
  clickable?: boolean,
  draggable?: boolean,
  visible?: boolean,
  zIndex?: number,
};

export type TPointBounds = {
  minPoint: TPoint;
  maxPoint: TPoint;
}

export type TLatLngBounds = {
  sw: TPosition;
  ne: TPosition;
}

export type TCoordinate = TPoint | TPosition;

export type TPointArrayLiteral = [number, number];

export type TPointLiteral = TPointArrayLiteral | TPointObjectLiteral;

export type TLatLngLiteral = TPointLiteral | TLatLngObjectLiteral;

export type TCoordinateLiteral = TPointLiteral | TLatLngLiteral;

export type TBounds = TPointBounds | TLatLngBounds;

export type TPointBoundsObjectLiteral = {
  minX: number,
  minY: number,
  maxX: number,
  maxY: number,
}

export type TPointBoundsArrayLiteral = [number, number, number, number];

export type TPointBoundsLiteral = TPointArrayLiteral | TPointBoundsObjectLiteral;

export type TMapSize = {
  width: number;
  height: number;
}

export type TMapSizeArrayLiteral = [number, number];

export type TSizeObjectLiteral = TMapSize;

export type TSizeLiteral = TMapSizeArrayLiteral | TSizeObjectLiteral;

export type TLatLngBoundsObjectLiteral = {
  north: number,
  east: number,
  south: number,
  west: number,
}

export type TLatLngBoundsLiteral = TPointBoundsArrayLiteral | TPointBoundsObjectLiteral;

export type TBoundsLiteral = TPointBoundsLiteral | TLatLngBoundsObjectLiteral;

export type TZoomControlStyle = "LARGE" | "SMALL";

export type TMapTypeRegistry = {
  mapTypeInfo: object;
  defaultMapTypeId?: string;
}

export type TScaleControlOptions = {
  position: TControlerPosition;
};

export type TMapOptions = {
  /** 지도 요소의 배경으로 사용할 이미지 URL 또는 CSS 색상값입니다. */
  background?: string;

  /** 지도 기본 타일의 불투명도를 설정합니다. 값의 범위는 0~1이며, 기본값은 1입니다. */
  baseTileOpacity?: number;

  /**
   * 지도의 초기 좌표 경계입니다. 이 값을 설정하면 지도 옵션 중 center와 zoom 옵션을 무시하고, 지정한 좌표 경계에 맞게 지도를 생성합니다.
   * @default null
   */
  bounds?: TPointBounds | TLatLngBounds | null;

  /**
   * 지도의 초기 중심 좌표입니다. 기본값은 서울 시청 좌표(37.5666103, 126.9783882)입니다.
   * @default 서울시청 (37.5666103, 126.9783882)
   */
  center?: TCoordinate | TCoordinateLiteral;

  /**
   * 사용자가 지도 위에서 마우스 버튼을 더블 클릭해 지도를 확대하는 기능의 사용 여부입니다.
   * @default false
   */
  disableDoubleClickZoom?: boolean;

  /**
   * 사용자가 지도 위에서 한 손가락으로 더블 탭해 지도를 확대하는 기능의 사용 여부입니다.
   * @default false
   */
  disableDoubleTapZoom?: boolean;

  /**
   * 사용자가 지도를 드래그했을 때 관성 효과(사용자가 동작을 끝낸 후에도 계속되는 지도의 움직임)의 사용 여부입니다.
   * @default true
   */
  disableKineticPan?: boolean;

  /**
   * 사용자가 지도 위에서 두 손가락으로 두 번 탭해 지도를 축소하는 기능의 사용 여부입니다.
   * @default false
   */
  disableTwoFingerTapZoom?: boolean;

  /**
   * 마우스 또는 손가락을 이용한 지도 이동(패닝) 허용 여부입니다.
   * @default true
   */
  draggable?: boolean;

  /**
   * 키보드 방향 키를 이용한 지도 이동(패닝) 허용 여부입니다.
   * @default false
   */
  keyboardShortcuts?: boolean;

  /**
   * NAVER 로고 컨트롤의 표시 여부입니다. (항상 노출로 변경)
   * @default true
   */
  logoControl?: boolean;

  /** NAVER 로고 컨트롤의 옵션입니다. */
  logoControlOptions?: TControlerPosition;

  /**
   * 지도 데이터 저작권 컨트롤의 표시 여부입니다.
   * @default true
   */
  mapDataControl?: boolean;

  /** 지도 데이터 저작권 컨트롤의 옵션입니다. */
  mapDataControlOptions?: TControlerPosition;

  /**
   * 지도 유형 컨트롤의 표시 여부입니다.
   * @default false
   */
  mapTypeControl?: boolean; // false

  /** 지도 유형 컨트롤의 옵션입니다 */
  mapTypeControlOptions?: {
    mapTypeIds?: TMapTypeId[] | null,
    position?: TControlerPosition,
    style?: TMapTypeControlStyle,
  }

  /**
   * 지도의 초기 지도 유형 id입니다.
   * @default NORMAL
   */
  mapTypeId: TMapTypeId;

  /** 지도 유형의 컬렉션을 포함하는 객체입니다. 이 값을 설정하지 않으면 사전에 정의된 NAVER 지도의 기본 지도 유형으로 설정합니다. */
  mapTypes?: TMapTypeRegistry;

  /**
   * 지도에서 보이는 최대 좌표 경계입니다. 지도의 중심 좌표는 지정한 최대 좌표 경계 내에서만 설정할 수 있습니다.
   * @default null
   */
  maxBounds: TBounds | TBoundsLiteral | null;

  /** 지도의 최대 줌 레벨입니다. 이 값을 설정하지 않으면 지정된 초기 지도 유형의 최고 줌 레벨로 설정합니다. */
  maxZoom?: number;

  /** 지도의 최소 줌 레벨입니다. 이 값을 설정하지 않으면 지정된 초기 지도 유형의 최저 줌 레벨로 설정합니다. */
  minZoom?: number;

  /** 지도 뷰포트의 안쪽 여백(패딩)입니다. 단위는 화면 픽셀이며, 기본값은 {top: 0, right: 0, bottom: 0, left: 0}입니다. */
  padding?: TMapPadding;

  /**
   * 핀치 제스처를 이용한 지도 확대/축소 허용 여부입니다.
   * @default true
   */
  pinchZoom?: boolean;

  /**
   * 지도 크기 조정 시 고정할 원점입니다.
   * @default CENTER
   */
  resizeOrigin?: TControlerPosition;

  /**
   * 지도 축척 컨트롤의 표시 여부입니다.
   * @default true
   */
  scaleControl?: boolean;

  /** 지도 축척 컨트롤의 옵션입니다. */
  scaleControlOptions?: TScaleControlOptions;

  /**
   * 마우스 스크롤 휠을 이용한 지도 확대/축소 허용 여부입니다.
   * @default true
   */
  scrollWheel?: boolean;

  /** 지도의 초기 크기입니다. 이 값을 설정하지 않으면, 지도 DOM 요소의 CSS 크기에 따라 지도 크기가 자동으로 조정됩니다. */
  size?: TMapSize | TSizeLiteral;

  /**
   * 도형, 마커 등 오버레이의 줌 효과 적용 대상입니다. 적용할 대상의 창(pane) 이름을 문자열로 지정합니다. 이 값이 all이면 모든 오버레이에 줌 효과가 적용됩니다. 오버레이의 개수가 많을 때는 성능에 영향을 줄 수 있으므로 주의해서 사용해야 합니다.
   * @default null
   */
  overlayZoomEffect?: string | null;

  /**
   * 지도의 크기보다 여유있게 로딩할 타일의 개수를 지정합니다.
   * @default 0
   */
  tileSpare?: number;

  /**
   * 지도 타일을 전환할 때 페이드 인 효과(타일이 서서히 나타나는 것)의 사용 여부입니다.
   * @default true
   */
  tileTransition?: boolean;

  /**
   * 지도의 초기 줌 레벨입니다.
   * @default 11
   */
  zoom?: number;

  /**
   * 줌 컨트롤의 표시 여부입니다.
   * @default false
   */
  zoomControl?: boolean;

  /** 줌 컨트롤의 옵션입니다. */
  zoomControlOptions?: {
    position?: TControlerPosition,
    style?: TZoomControlStyle,
    legendDisabled?: boolean,
  };

  /**
   * 줌 효과 시 고정하여 적용할 기준 좌표입니다. 해당 좌표가 현재 지도 화면 밖에 위치해 있으면 기본 기준 좌표를 적용합니다.
   * @default null
   */
  zoomOrigin?: TCoordinate | TCoordinateLiteral;
}

type TMarker = {
  getAnimation: () => void,
  getClickable: () => boolean,
  getContainerTopLeft: () => void,
  getCursor: () => void,
  getDraggable: () => void,
  getDrawingRect: () => TLatLngBounds | TPointBounds,
  getIcon: () => TImageIcon | TSymbolIcon | THtmlIcon,
  getOptions: () => string,
  getPanes: () => void,
  getPosition: () => TLatLng,
  getProjection: () => void,
  getShape: () => void,
  getTitle: () => string,
  getVisible: () => boolean,
  getZIndex: () => number,
  setPosition: () => boolean,
  setVisible: () => void,
  setZIndex: () => void,
  setTitle: () => void,
  setShape: () => void,
}