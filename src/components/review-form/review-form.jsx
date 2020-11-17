import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Operation as PizzasOperation } from "../../reducer/pizzas/pizzas.js";

import Stars from "../stars/stars.jsx";

import "./review-form.css";

const RatingStarTitle = {
  ONE_STAR: `terribly`,
  TWO_STARS: `badly`,
  THREE_STARS: `not bad`,
  FOUR_STARS: `good`,
  FIVE_STARS: `perfect`,
};

const ratingOptions = [
  RatingStarTitle.ONE_STAR,
  RatingStarTitle.TWO_STARS,
  RatingStarTitle.THREE_STARS,
  RatingStarTitle.FOUR_STARS,
  RatingStarTitle.FIVE_STARS,
];

const ReviewText = {
  MIN_LENGTH: 30,
  MAX_LENGTH: 50
}

const VALIDATION_ERROR = "Please, ensure that you have set your rating and your message is 30 to 50 characters long before submittion.";

const ReviewForm = ({pizzaId}) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [isBlocked, setIsBlocked] = useState(false);
  const [reviewError, setReviewError] = useState("");
  const dispatch = useDispatch();

  const handleValidation = () => {
    return (
      rating > 0 && review.length >= ReviewText.MIN_LENGTH && review.length <= ReviewText.MAX_LENGTH
    );
  };

  const handleSubmit = () => {
    if (!handleValidation()) {
      setReviewError(VALIDATION_ERROR);
      return;
    }

    setReviewError("");

    setIsBlocked(true);

    const newReview = {
      user: {
        id: "user-0",
        name: "Ben Test User",
        avatar: "/img/user-no-avatar.svg",
      },
      rating,
      date: new Date().toISOString(),
      pizzaId,
      text: review,
    };

    dispatch(PizzasOperation.addPizzaReview(newReview));
    setRating(0);
    setReview("");
    setIsBlocked(false);
  }

  return (
    <section id="new-review" className="new-review">
      <div className="new-review-title-container">
        <h2 className="review-title">Write a review</h2>
      </div>
      <form
        className="review-form"
        method="POST"
        onSubmit={(evt) => {
          evt.preventDefault();
          handleSubmit();
        }}
      >
        <div className="review-form-top">
          <label htmlFor="review-text" className="review-form-title">
            Your review
          </label>
          <Stars
            options={ratingOptions}
            selectedOption={rating}
            onSelectedOptionChange={(rating) => setRating(rating)}
            isBlocked={isBlocked}
          />
          {reviewError &&
            <p className="reiview-error">
              {reviewError}
            </p>}
        </div>
        <textarea
          onChange={(evt) => setReview(evt.target.value)}
          id="review-text"
          name="review-text"
          className="review-form-text"
          placeholder="Tell us what you think about your order"
          value={review}
          minLength={ReviewText.MIN_LENGTH}
          maxLength={ReviewText.MAX_LENGTH}
          disabled={isBlocked}
          required
        />
        <div className="review-form-bottom">
          <p className="review-form-note">
            To submit review please make sure to set rating and describe your
            experience with at least 30 characters.
          </p>
          <button type="submit" className="dark-button review-form-submit" disabled={isBlocked}>
            Submit review
          </button>
        </div>
      </form>
    </section>
  );
};

ReviewForm.propTypes = {
  pizzaId: PropTypes.string.isRequired
}

export default ReviewForm;
