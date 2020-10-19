import React from "react";
import "./review-form.css";

const ReviewForm = () => {
  return (
    <section className="new-review">
      <div className="new-review-title-container">
        <h2 className="review-title">Write a review</h2>
        <p className="review-title-note">
          Please note, you need to be loged in to submit a review.
        </p>
      </div>
      <form className="review-form" method="POST">
        <div className="review-form-top">
          <label htmlFor="review-text" className="review-form-title">
            Your review
          </label>
          <div className="review-form-rating">
            <input
              id="star-1"
              name="review-rating"
              type="radio"
              className="review-form-rating-input visually-hidden"
              value="1"
              title="terrible"
            />
            <label htmlFor="star-1" className="review-form-rating-label">
              <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 0l2.47 7.6h7.992l-6.466 4.698 2.47 7.601L11 15.202l-6.466 4.697 2.47-7.6L.538 7.6H8.53L11 0z" />
              </svg>
            </label>

            <input
              id="star-2"
              name="review-rating"
              type="radio"
              className="review-form-rating-input visually-hidden"
              value="2"
              title="bad"
            />
            <label htmlFor="star-2" className="review-form-rating-label">
              <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 0l2.47 7.6h7.992l-6.466 4.698 2.47 7.601L11 15.202l-6.466 4.697 2.47-7.6L.538 7.6H8.53L11 0z" />
              </svg>
            </label>

            <input
              id="star-3"
              name="review-rating"
              type="radio"
              className="review-form-rating-input visually-hidden"
              value="3"
              title="not bad"
            />
            <label htmlFor="star-3" className="review-form-rating-label">
              <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 0l2.47 7.6h7.992l-6.466 4.698 2.47 7.601L11 15.202l-6.466 4.697 2.47-7.6L.538 7.6H8.53L11 0z" />
              </svg>
            </label>

            <input
              id="star-4"
              name="review-rating"
              type="radio"
              className="review-form-rating-input visually-hidden"
              value="4"
              title="good"
            />
            <label htmlFor="star-4" className="review-form-rating-label">
              <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 0l2.47 7.6h7.992l-6.466 4.698 2.47 7.601L11 15.202l-6.466 4.697 2.47-7.6L.538 7.6H8.53L11 0z" />
              </svg>
            </label>

            <input
              id="star-5"
              name="review-rating"
              type="radio"
              className="review-form-rating-input visually-hidden"
              value="5"
              title="perfect"
            />
            <label htmlFor="star-5" className="review-form-rating-label">
              <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 0l2.47 7.6h7.992l-6.466 4.698 2.47 7.601L11 15.202l-6.466 4.697 2.47-7.6L.538 7.6H8.53L11 0z" />
              </svg>
            </label>
          </div>
        </div>
        <textarea
          id="review-text"
          name="review-text"
          className="review-form-text"
          placeholder="Tell us what you think about your order"
        ></textarea>
        <p className="review-form-note">
          To submit review please make sure to set rating and describe your
          experience with at least 30 characters.
        </p>
        <button type="submit" className="dark-button review-form-submit">
          Submit review
        </button>
      </form>
    </section>
  );
};

export default ReviewForm;
