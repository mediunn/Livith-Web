import { SetlistDetailProps } from "../types";
import DetailInfo from "../../../shared/ui/DetailInfo";
import useSetlistDetail from "../../../features/setlist/model/useSetlistDetail";
import formatDate from "../../../features/setlist/utils/formatDate";

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
      status={`${setlist?.status!} 셋리스트`}
      title={setlist?.title!}
      imageUrl={setlist?.imgUrl!}
      date={formatDate(setlist?.date!)}
      artist={setlist?.artist!}
    />
  );
}

export default SetlistDetail;
