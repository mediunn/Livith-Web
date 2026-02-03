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
  nickname: string;
  provider: string;
  providerId: string;
  email: string;
  marketingConsent: boolean;
  preferredGenreIds: number[];
  preferredArtistIds?: number[];
};
