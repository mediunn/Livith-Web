import ListHeader from "../shared/ui/ListHeader";
import { useNavigate } from "react-router-dom";
import { useUpdateRead } from "../entities/notification/model/useUpdateRead";
import AlarmItem from "../entities/notification/ui/AlarmItem";
import { useAlarm } from "../entities/notification/model/useAlarm";
import { useEffect, useRef } from "react";

function AlarmListPage() {
  const navigate = useNavigate();
  const observerRef = useRef<HTMLDivElement>(null);

  const size = 20;
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useAlarm({ size });

  const updateReadMutation = useUpdateRead();

  const handleUpdateRead = (id: number) => {
    updateReadMutation.mutate(id);
  };

  useEffect(() => {
    if (!observerRef.current || !hasNextPage || isFetchingNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  const shouldShowError =
    isError && (!data || !data.pages || data.pages.length === 0);

  return (
    <div className="pb-90">
      <ListHeader
        title={"알림"}
        rightElement={
          <button
            onClick={() => navigate("/alarm-setting")}
            className="p-8 text-grayScaleWhite text-Body4-re font-regular font-NotoSansKR"
          >
            알림 설정
          </button>
        }
      />

      <p className="py-10 px-16 text-grayScaleBlack30 text-Body4-sm font-semibold font-NotoSansKR">
        알림은 90일 이후 순차적으로 삭제돼요.
      </p>

      {!isLoading &&
        !shouldShowError &&
        data &&
        data.pages &&
        data.pages.length > 0 && (
          <div className="flex flex-col px-4 gap-12">
            {data.pages.map((alarm) => (
              <AlarmItem
                key={alarm.id}
                id={alarm.id}
                type={alarm.type}
                title={alarm.title}
                content={alarm.content}
                targetId={alarm.targetId}
                isRead={alarm.isRead}
                createdAt={alarm.createdAt}
                updateRead={handleUpdateRead}
              />
            ))}

            {hasNextPage && !isError && (
              <div ref={observerRef} className="py-20 text-center">
                {isFetchingNextPage && (
                  <p className="text-grayScaleBlack50 text-Body4-re font-regular font-NotoSansKR">
                    더 불러오는 중...
                  </p>
                )}
              </div>
            )}
          </div>
        )}
    </div>
  );
}

export default AlarmListPage;
