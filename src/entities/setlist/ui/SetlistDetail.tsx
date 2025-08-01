import { SetlistDetailProps } from "../types";
import useSetlistDetail from "../../../features/setlist/model/useSetlistDetail";
import EmptySetlistImageIcon from "../../../shared/assets/EmptyConcertImageIcon.svg";
import { formatSetlistDate } from "../../../shared/utils/formatSetlistDate";
import { useEffect } from "react";
function SetlistDetail({
  concertId,
  setlistId,
  setSetlistType,
}: SetlistDetailProps) {
  const {
    data: setlist,
    error,
    isLoading,
  } = useSetlistDetail({ concertId, setlistId });

  // 렌더 후 setSetlistType 호출
  useEffect(() => {
    if (setlist?.type) {
      setSetlistType?.(setlist.type);
    }
  }, [setlist?.type, setSetlistType]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="w-full h-337 relative ">
      <div className="h-337 absolute inset-0 bg-grayScaleBlack100 opacity-70"></div>
      {setlist?.imgUrl ? (
        <img
          src={setlist?.imgUrl}
          alt="concert image"
          className="w-full h-full object-cover"
        />
      ) : (
        <img
          src={EmptySetlistImageIcon}
          alt="empty concert image"
          className="w-full h-full object-cover"
        />
      )}
      <div className="absolute bottom-36 left-18 w-full pr-36">
        {setlist?.status && (
          <div className="bg-grayScaleBlack90 rounded-24 px-13 py-7 w-fit">
            <p className="text-grayScaleBlack30 text-caption-lg font-semibold font-NotoSansKR">
              {setlist?.status}
            </p>
          </div>
        )}
        <p className="pt-6 text-grayScaleWhite text-head-lg font-semibold font-NotoSansKR break-words whitespace-normal max-w-[57%]">
          {setlist?.title}
        </p>

        <p className="pt-6 text-grayScaleBlack30 text-body-lgs font-regular font-NotoSansKR">
          {formatSetlistDate(setlist?.startDate!, setlist?.endDate!)}
        </p>
        <p className="mt-2 text-grayScaleWhite text-caption-sm font-regular font-NotoSansKR break-words whitespace-normal max-w-[57%]">
          {setlist?.artist}
        </p>
      </div>
    </div>
  );
}

export default SetlistDetail;
