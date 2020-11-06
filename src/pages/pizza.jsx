import React from "react";
import Breadcrumbs from "../components/breadcrumbs/breadcrumbs.jsx";
import CardDetails from "../components/card-details/card-details.jsx";
import Review from "../components/review/review.jsx";
import ReviewForm from "../components/review-form/review-form.jsx";
import PrevNextControls from "../components/prev-next-controls/prev-next-controls.jsx";

const Pizza = () => {
  return (
    <main className="pizza-page">
      <div className="wrapper">
        <h1 className="visually-hidden">Pizza page</h1>
        <Breadcrumbs />
        <CardDetails />
        <div className="reviews-wrapper">
        <section id="reviews" className="reviews">
          <div className="reviews-top">
            <h2 className="reviews-title">Reviews</h2>
            <p className="reviews-count">4.8 / 5 (365 reviews)</p>
            <a className="reivews-new-review-link" href="#new-review">Write a review</a>
          </div>
          <div className="review-container">
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
          </div>
          <PrevNextControls />
        </section>
        <ReviewForm />
        </div>
      </div>
    </main>
  );
};

export default Pizza;
