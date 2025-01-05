import React, { useState } from 'react';

function CommentForm(): JSX.Element {
  // Состояние для хранения данных формы
  const [rating, setRating] = useState<number | null>(null);
  const [review, setReview] = useState<string>('');
  const [isSubmitDisabled, setSubmitDisabled] = useState(true);

  const validateForm = (_rating: number | null, reviewText: string) => {
    const isValid = _rating !== null && reviewText.length >= 50;
    setSubmitDisabled(!isValid);
  };

  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedRating = parseInt(event.target.value, 10);
    setRating(selectedRating);
    validateForm(selectedRating, review);
  };

  const handleReviewChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const reviewText = event.target.value;
    setReview(reviewText);
    validateForm(rating, reviewText);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // сброс состояния формы
    setRating(null);
    setReview('');
    setSubmitDisabled(true);
  };

  const starTitles: Record<number, string> = {
    5: 'perfect',
    4: 'good',
    3: 'not bad',
    2: 'badly',
    1: 'terribly',
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {[5, 4, 3, 2, 1].map((star) => (
          <React.Fragment key={star}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={star}
              id={`${star}-stars`}
              type="radio"
              checked={rating === star}
              onChange={handleRatingChange}
            />
            <label
              htmlFor={`${star}-stars`}
              className="reviews__rating-label form__rating-label"
              title={starTitles[star] || 'terribly'}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review}
        onChange={handleReviewChange}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isSubmitDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default CommentForm;
