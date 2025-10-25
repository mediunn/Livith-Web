export type User = {
  id: number;
  interestConcertId: number;
  nickname: string;
  email: string;
  provider: string;
  providerId: string;
  marketingConsent: boolean;
};

export type SignupRequest = {
  userData: {
    nickname: string;
    provider: string;
    providerId: string;
    email: string;
    marketingConsent: boolean;
  };
  client: string;
};
