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
