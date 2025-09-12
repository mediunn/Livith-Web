import { SetlistType } from "../types";
import useSetlistCollection from "../../../features/setlist/model/useSetlistCollection";
import { useInView } from "react-intersection-observer";
import SetListCard from "./SetListCard";
import formatDate from "../../../features/setlist/utils/formatDate";

interface SetlistCollectionProps {
  type: SetlistType;
  concertId: number;
}

function SetlistCollection({ type, concertId }: SetlistCollectionProps) {
  const size = 15;
  const {
    data: setlists,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useSetlistCollection({ type, concertId, size });
  const { ref } = useInView({
    triggerOnce: false,
    onChange: (inView) => {
      if (inView && hasNextPage && !isFetchingNextPage && fetchNextPage) {
        fetchNextPage();
      }
    },
  });
  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Error</div>;

  return (
    <div className="grid grid-cols-3 gap-x-9 gap-y-24 mt-24 mx-16">
      {setlists?.pages?.map((setlist) => (
        <div key={setlist.id}>
          <SetListCard
            imageUrl={setlist.imgUrl}
            title={setlist.title}
            status={setlist.status}
            type={setlist.type}
            setlistId={setlist.id}
            concertId={concertId}
          />
        </div>
      ))}

      {isFetchingNextPage && <div>Loading more...</div>}

      {hasNextPage && <div ref={ref} className="h-10" />}
    </div>
  );
}

export default SetlistCollection;
