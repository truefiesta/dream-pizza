import React from "react";
import PropTypes from "prop-types";
import { convertStarRatingToWidthPercent } from "../../utils.js";

import "./review.css";
import noAvatar from "../../assets/img/user-no-avatar.svg";

const Review = ({review}) => {
  const {user, rating, text} = review;

  return (
    <article className="review">
      <div className="review-details">
        <div className="review-user-avatar">
          <img
            src={user.avatar !== `` ? `${user.avatar}` : `${noAvatar}`}
            width="50"
            height="50"
            alt={`photo of ${user.name}`}
          />
        </div>
        <div className="review-details-info">
          <div className="review-rating">
            <span
              className="review-rating-active"
              style={{ width: convertStarRatingToWidthPercent(rating) }}
            ></span>
          </div>
          <p className="review-user-name">{user.name}</p>
          <p className="review-date">
            <time dateTime="2020-04-25 20:00">25 April 2020</time>
          </p>
        </div>
      </div>
      <p className="review-text">
        {text}
      </p>
    </article>
  );
};

Review.propTypes = {
  review: PropTypes.shape({
    user: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired
    }).isRequired,
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
}

export default Review;
