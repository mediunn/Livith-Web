export type FeaturedArtist = {
  id: number;
  name: string;
  imgUrl: string;
};
export type FeaturedArtistListResponse = {
  data: FeaturedArtist[];
  cursor: number | null | undefined;
  totalCount?: number;
};

export type UserFeaturedArtist = FeaturedArtist & {
  userId: number;
};
