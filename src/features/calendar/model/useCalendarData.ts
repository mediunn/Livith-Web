import { useMonthlyCalendar } from "./useMonthlyCalendar";
import { useCalendarBridge } from "../../../shared/lib/webview/useCalendarBridge";
import { ConcertType, ScheduleType } from "./types";
import { isIOSWebView } from "../../../shared/lib/webview/isIOSWebView";
export function useCalendarData(params: {
  year: number;
  month: number;
  scheduleTypes: ScheduleType[];
  concertType: ConcertType;
}) {
  const api = useMonthlyCalendar(params);
  const bridge = useCalendarBridge();

  return isIOSWebView() ? bridge : api;
}
