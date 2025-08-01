import { useQuery } from "@tanstack/react-query";
import { getConcertInsideInfo } from "../../../entities/concert/api/getConcertInsideInfo";

function useConcertDetail({ concertId }: { concertId: number }) {
  return useQuery({
    queryKey: ["concert", concertId],
    queryFn: () => getConcertInsideInfo(concertId),
    select: (data) => data,
  });
}

export default useConcertDetail;
