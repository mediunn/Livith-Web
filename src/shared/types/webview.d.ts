import type { MonthlyCalendarResponse } from "../../../features/calendar/model/types";

export {};

declare global {
  interface Window {
    webkit?: {
      messageHandlers?: {
        [key: string]: {
          postMessage(data: unknown): void;
        };
      };
    };

    Android?: {
      calendarDateSelected?: (date: string) => void;
      calendarMonthChanged?: (startDate: string, endDate: string) => void;
    };

    setCalendarData?: (data: MonthlyCalendarResponse[]) => void;
  }
}
