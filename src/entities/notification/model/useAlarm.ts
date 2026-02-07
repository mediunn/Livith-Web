import { useInfiniteQuery } from "@tanstack/react-query";
import { getAlarm } from "../api/getAlarm";

type UseAlarmParams = {
  size: number;
};

export const useAlarm = ({ size }: UseAlarmParams) => {
  return useInfiniteQuery({
    queryKey: ["alarms"],
    queryFn: ({ pageParam }) => {
      return getAlarm({
        cursor: pageParam ?? undefined,
        size,
      });
    },
    initialPageParam: undefined as number | undefined,
    getNextPageParam: (lastPage) => {
      if (lastPage.data && lastPage.data.length === size) {
        const lastItem = lastPage.data[lastPage.data.length - 1];

        return lastItem.id;
      }

      return undefined;
    },
    select: (data) => {
      return {
        pages: data.pages.flatMap((page) => page.data),
        pageParams: data.pageParams,
      };
    },
    retry: 0,
    staleTime: 1000 * 60 * 5,

    throwOnError: false,
  });
};
