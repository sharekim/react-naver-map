export type TSize = { width: number, height: number };
export type TPosition = { lat: number, lng: number };
export type TPoint = { x: number, y: number };
export type TLatLng = { lat: number, lng: number };
export type TLatLngBounds = { sw: TLatLng, ne: TLatLng };
export type TPointBounds = { minPoint: TPoint, maxPoint: TPoint };

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