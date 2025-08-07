import { Concert, ConcertStatus } from "../../../entities/concert/types";

export const setConcertStatus = ({
  status,
  daysLeft,
}: {
  status: ConcertStatus;
  daysLeft: number;
}) => {
  if (status === ConcertStatus.ONGOING) {
    return "진행중";
  } else if (status === ConcertStatus.COMPLETED) {
    return "종료";
  } else if (daysLeft === 0) {
    return "D-Day";
  } else {
    return `D-${daysLeft}`;
  }
};
