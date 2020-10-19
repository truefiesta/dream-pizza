import React from "react";
import "./review.css";
import noAvatar from "../../assets/img/user-no-avatar.svg";

const Review = () => {
  return (
    <article className="review">
      <div className="review-details">
        <div className="review-user-avatar">
          <img
            src={noAvatar}
            width="50"
            height="50"
            alt="photo of John Terensky"
          />
        </div>
        <div className="review-details-info">
          <div className="review-rating">
            <span
              className="review-rating-active"
              style={{ width: "80%" }}
            ></span>
          </div>
          <p className="review-user-name">John Terensky</p>
          <p className="review-date">
            <time dateTime="2020-04-25 20:00">25 April 2020</time>
          </p>
        </div>
      </div>
      <p className="review-text">
        This is the best pepperoni pizza I’ve eaten in my life. The crust was
        perfect. All ingredients were fresh. It was delivered on time. Great
        pizza place!
      </p>
    </article>
  );
};

export default Review;
