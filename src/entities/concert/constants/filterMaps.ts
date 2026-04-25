import { StatusFilter } from "../types";

const statusMap: Record<StatusFilter, string> = {
  [StatusFilter.ALL]: "전체",
  [StatusFilter.ONGOING]: "진행중",
  [StatusFilter.UPCOMING]: "진행예정",
  [StatusFilter.COMPLETED]: "진행완료",
  [StatusFilter.CANCELED]: "공연취소",
};

export { statusMap };
