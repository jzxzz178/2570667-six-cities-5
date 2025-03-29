export interface ReviewData {
  id: string;
  date: Date;
  user: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  comment: string;
  rating: number;
}
