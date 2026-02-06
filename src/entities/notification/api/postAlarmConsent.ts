import axiosInstance from "../../../shared/api/axiosInstance";
import { NotificationField } from "../types";

type postAlarmConsentParams = {
  field: NotificationField;
  isAgreed: boolean;
};

export async function postAlarmConsent({
  field,
  isAgreed,
}: postAlarmConsentParams) {
  const response = await axiosInstance.post(`/notifications/consent`, {
    field,
    isAgreed,
  });

  return response.data;
}
