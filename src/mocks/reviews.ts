interface Review {
  id: number;
  offerId: number; // Связывает отзыв с конкретным предложением
  userId: number;
  rating: number;
  comment: string;
  date: string;
}

const reviews: Review[] = [
  {
    id: 1,
    offerId: 1,
    userId: 101,
    rating: 5,
    comment: 'Amazing place! Loved every bit of it.',
    date: '2023-10-12',
  },
  {
    id: 2,
    offerId: 1,
    userId: 102,
    rating: 4,
    comment: 'Very nice apartment, close to everything.',
    date: '2023-10-15',
  },
];

export default reviews;
