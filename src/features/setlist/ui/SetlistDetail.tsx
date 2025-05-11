import { SetlistDetailProps } from "../../../entities/setlist/types";
import DetailInfo from "../../../shared/ui/DetailInfo";
import useSetlistDetail from "../model/useSetlistDetail";

function SetlistDetail({ concertId, setlistId }: SetlistDetailProps) {
  const {
    data: setlist,
    error,
    isLoading,
  } = useSetlistDetail({ concertId, setlistId });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <DetailInfo
      status={setlist?.status}
      title={setlist?.title}
      imageUrl={setlist?.imgUrl}
      date={setlist?.date}
      artist={setlist?.artist}
    />
  );
}

export default SetlistDetail;
