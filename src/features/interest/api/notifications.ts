import axiosInstance from "../../../shared/api/axiosInstance";
import { ApiResponse } from "../../../shared/types/response";

export type EntryAlertKind =
  | "AUTO_REMOVED_COMPLETED"
  | "AUTO_REMOVED_CANCELED"
  | "REQUEST_REGISTERED"
  | "REQUEST_FAILED";

export interface EntryAlertItem {
  kind: EntryAlertKind;
  title: string;
  content: string;
  concertId?: number;
}

export interface EntryAlertResponse {
  items: EntryAlertItem[];
}

export const postEntryAlerts = async (): Promise<
  ApiResponse<EntryAlertResponse>
> => {
  const response = await axiosInstance.post<ApiResponse<EntryAlertResponse>>(
    "/notifications/entry-alerts",
  );

  return response.data;
};
