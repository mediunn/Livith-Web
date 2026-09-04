import { useMonthlyCalendar } from "./useMonthlyCalendar";
import { useCalendarBridge } from "../../../shared/lib/webview/useCalendarBridge";
import { ConcertType, ScheduleType } from "./types";
import { isWebView } from "../../../shared/lib/webview/isWebView";
export function useCalendarData(params: {
  startDate: string;
  endDate: string;
  scheduleTypes: ScheduleType[];
  concertType: ConcertType;
}) {
  const api = useMonthlyCalendar(params);
  const bridge = useCalendarBridge();

  return isWebView() ? bridge : api;
}
