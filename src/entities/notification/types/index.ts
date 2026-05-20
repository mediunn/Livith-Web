export type AlarmSetting = {
  benefitAlert: boolean;
  ticketAlert: boolean;
  infoAlert: boolean;
  interestAlert: boolean;
  recommendAlert: boolean;
};

export type NotificationField =
  | "benefitAlert"
  | "ticketAlert"
  | "infoAlert"
  | "interestAlert"
  | "recommendAlert";
