export type UserPreference = {
  id: number;
  name: string;
};

export type User = {
  id: number;
  nickname: string;
  email: string;
  provider: string;
  providerId: string;
  marketingConsent: boolean;
  hasPreferredGenre: boolean;
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
