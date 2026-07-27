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

    setCalendarData?: (data: MonthlyCalendarResponse[]) => void;
  }
}
