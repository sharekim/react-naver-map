// 사용 안하고 싶은 건 따로 제외 할 수 있게
// 제네릭 사용하면 되지 않을까?
export const MapTypeId = {
  NORMAL: "일반 지도",
  TERRAIN: "지형도",
  SATELLITE: "위성 지도",
  HYBRID: "겹쳐보기 지도",
} as const;

export type TMapTypeId = keyof typeof MapTypeId;

export const ControlerPosition = {
  CENTER: 0,
  TOP_LEFT: 1,
  TOP_CENTER: 2,
  TOP_RIGHT: 3,
  LEFT_CENTER: 4,
  LEFT_TOP: 5,
  LEFT_BOTTOM: 6,
  RIGHT_TOP: 7,
  RIGHT_CENTER: 8,
  RIGHT_BOTTOM: 9,
  BOTTOM_LEFT: 10,
  BOTTOM_CENTER: 11,
  BOTTOM_RIGHT: 12,
} as const;

export type TControlerPosition = keyof typeof ControlerPosition;

export const MapTypeControlStyle = {
  BUTTON: 1,
  DROPDOWN: 2,
} as const;

export type TMapTypeControlStyle = keyof typeof MapTypeControlStyle;