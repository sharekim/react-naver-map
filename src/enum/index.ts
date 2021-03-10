export const MapTypeId = {
  NORMAL: "일반 지도",
  TERRAIN: "지형도",
  SATELLITE: "위성 지도",
  HYBRID: "겹쳐보기 지도",
} as const;

// 한경에서 사용할때 이용하면 될듯
type OmitA = keyof Omit<typeof MapTypeId, "SATELLITE">;

export type TMapTypeId = keyof typeof MapTypeId;

type Test = {
  a: string;
  b: number;
  c: boolean;
}



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