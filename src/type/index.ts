export type TSize = { width: number, height: number };
export type TPosition = { lat: number, lng: number };
export type TPoint = { x: number, y: number };
export type TImageIcon = {
  url: string;
  size: TSize;
  scaledSize: TSize;
  origin: TPoint;
  anchor: TPoint;
};

export type THtmlIcon = string;
export type TSymbolIcon = string;

export type TMarkerOptions = {
  position: TPosition;
  icon: string | TImageIcon | THtmlIcon | TSymbolIcon,
  shape: any,
  title: string,
  cursor: string,
  clickable?: boolean,
  draggable?: boolean,
  visible?: boolean,
  zIndex?: number,
};