import { useQuery } from "@tanstack/react-query";
import { getInterestConcertSetlist } from "../api/getInterestConcertSetlist";

function useInterestConcertSetlist({ concertId }: { concertId: number }) {
  return useQuery({
    queryKey: ["interestConcertSetlist", concertId],
    queryFn: () => getInterestConcertSetlist({ concertId }),
    select: (data) => data.data,
  });
}
export default useInterestConcertSetlist;
