import { MonthlyCalendar } from "../features/calendar/ui/MonthlyCalendar";
import { sendSelectedDate } from "../shared/lib/webview/bridge";

export default function CalendarWebViewPage() {
  return <MonthlyCalendar onDateSelect={sendSelectedDate} />;
}
