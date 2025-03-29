import React from 'react';
import Review from './review';
import { ReviewData } from '../../types/review';

interface ReviewsListProps {
  reviews: ReviewData[];
}

const ReviewsList: React.FC<ReviewsListProps> = ({ reviews }) => (
  <section className="offer__reviews reviews">
    <h2 className="reviews__title">
      Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
    </h2>
    <ul className="reviews__list">
      {reviews.map((review) => (
        <Review key={review.date.getTime()} review={review} />
      ))}
    </ul>
  </section>
);

export default ReviewsList;
