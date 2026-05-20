import axiosInstance from "../../../shared/api/axiosInstance";

export type MarketingConsent = {
  sender: string;
  agreedAt: string;
  message: string;
};

type PostMarketingConsent = {
  message: string;
  data: MarketingConsent;
  statusCode: number;
};

type PostMarketingConsentParams = {
  isAgreed: boolean;
};

export async function postMarketingConsent({
  isAgreed,
}: PostMarketingConsentParams): Promise<PostMarketingConsent> {
  const response = await axiosInstance.post(
    "/notifications/marketing-consent",
    {
      isAgreed,
    },
  );

  return response.data;
}
