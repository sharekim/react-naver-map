export const MapTypeId = {
  normal: "일반 지도",
  terrain: "지형도",
  satellite: "위성 지도",
  hybrid: "겹쳐보기 지도",
} as const;

// 네이버 지도에서 맵 타입을 바꿀때 소문자로 받음
// toLowerCase 사용할지는 좀 생각해 봐야될듯
// "normal" | "terrain" | "satellite" | "hybrid"
export type TMapTypeId = keyof typeof MapTypeId;