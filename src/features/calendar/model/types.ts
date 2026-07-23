export enum ConcertType {
  ALL = "ALL",
  INTEREST = "INTEREST",
}

export enum ScheduleType {
  CONCERT = "CONCERT",
  TICKETING = "TICKETING",
}

export type CalendarEventType =
  | "CONCERT"
  | "PRE_TICKETING"
  | "GENERAL_TICKETING"
  | "ADD_TICKETING"
  | "MORE";

export type CalendarDay = {
  date: string;
  events: MonthlyCalendarEvent[];
};

export type MonthlyCalendarEvent = {
  id: number;
  artist: string;
  type: ScheduleType;
};

export type MonthlyCalendarResponse = {
  year: number;
  month: number;
  days: CalendarDay[];
};
