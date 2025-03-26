interface Review {
  id: number;
  offerId: number;
  userId: number;
  rating: number;
  text: string;
  date: Date;
}

const reviews: Review[] = [
  {
    id: 1,
    offerId: 1,
    userId: 1,
    rating: 4,
    text: 'Amazing place! Loved every bit of it.',
    date: new Date('2019-04-24'),
  },
  {
    id: 2,
    offerId: 1,
    userId: 2,
    rating: 3,
    text: 'Very nice apartment, close to everything.',
    date: new Date('2019-05-15'),
  },
];

export default reviews;
