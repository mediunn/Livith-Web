import { useEffect, useState } from "react";
import { MonthlyCalendarResponse } from "../../../features/calendar/model/types";

export function useCalendarBridge() {
  const [data, setData] = useState<MonthlyCalendarResponse[] | null>(null);

  useEffect(() => {
    window.setCalendarData = (calendarData: MonthlyCalendarResponse[]) => {
      setData(calendarData);
    };

    return () => {
      delete window.setCalendarData;
    };
  }, []);

  return {
    data,
    isLoading: data === null,
    error: null,
  };
}
