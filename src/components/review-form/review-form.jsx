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

const ReviewForm = ({pizzaId}) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState(``);
  const dispatch = useDispatch();
  const reviewError = false;
  const submitReviewHandle = () => {
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
    setReview('');
    // validate
    // submit
  }

  return (
    <section id="new-review" className="new-review">
      <div className="new-review-title-container">
        <h2 className="review-title">Write a review</h2>
        <p className="review-title-note">
          Please note, you need to be loged in to submit a review.
        </p>
      </div>
      <form
        className="review-form"
        method="POST"
        onSubmit={(evt) => {
          evt.preventDefault();
          submitReviewHandle();
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
            isBlocked={false}
          />
          {reviewError &&
            <p className="reiview-error">
              Your review haven’t been submited.
              Please, try again later.
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
          required
        />
        <div className="review-form-bottom">
          <p className="review-form-note">
            To submit review please make sure to set rating and describe your
            experience with at least 30 characters.
          </p>
          <button type="submit" className="dark-button review-form-submit">
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
