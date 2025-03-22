import React from 'react';

export interface ReviewProps {
  avatar: string;
  userName: string;
  rating: number;
  text: string;
  date: Date;
}

const Review: React.FC<ReviewProps> = ({ avatar, userName, rating, text, date }) => {
  const formattedDate = new Intl.DateTimeFormat('ru', { day: 'numeric', month: 'long', year: 'numeric' }).format(date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={avatar}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name" style={{ whiteSpace: 'nowrap' }}>{userName}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${rating}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{text}</p>
        <time className="reviews__time" dateTime={date.toISOString()}>
          {formattedDate}
        </time>
      </div>
    </li>
  );
};

export default Review;
