import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Operation as PizzasOperation } from "../reducer/pizzas/pizzas.js";
import { selectPizzaById, selectPizzaReviews } from "../reducer/pizzas/selectors.js";
import { getItemsForPageNumber } from "../utils.js";

import Breadcrumbs from "../components/breadcrumbs/breadcrumbs.jsx";
import CardDetails from "../components/card-details/card-details.jsx";
import Review from "../components/review/review.jsx";
import ReviewForm from "../components/review-form/review-form.jsx";
import PrevNextControls from "../components/prev-next-controls/prev-next-controls.jsx";

const MAX_REVIEWS_TO_SHOW = 2;

const Pizza = ({ match }) => {
  const dispatch = useDispatch();
  const pizzaId = match.params.id;
  const pizza = useSelector(selectPizzaById(pizzaId));
  let reviews = useSelector(selectPizzaReviews);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(PizzasOperation.loadPizzaReviews(pizzaId));
  }, []);

  if (!pizza) return null;

  const hasReviews = reviews.length > 0;
  let reviewsMarkup = '';
  if (hasReviews) {
    const sortedReviews = reviews.slice();
    sortedReviews.sort((reviewA, reviewB) => Date.parse(reviewB.date) - Date.parse(reviewA.date));
    let reviewsToShow = getItemsForPageNumber(page, MAX_REVIEWS_TO_SHOW, sortedReviews);
    reviewsMarkup = (
      <>
      <div className="review-container">
        {reviewsToShow.map(review =>  <Review key={review.id} review={review} />)}
      </div>
      {reviews.length > MAX_REVIEWS_TO_SHOW &&
        <PrevNextControls
          currentPage={page}
          itemsNumber={reviews.length}
          maxItemsPerPage={MAX_REVIEWS_TO_SHOW}
          onPrevClick={(page) => {setPage(page)}}
          onNextClick={(page) => {setPage(page)}}
        />
      }
      </>
    );
  }

  return (
    <main className="pizza-page">
      <div className="wrapper">
        <h1 className="visually-hidden">Pizza page</h1>
        <Breadcrumbs />
        <CardDetails
          pizza={pizza}
          reviewsNumber={reviews.length || 0}
        />
        <div className="reviews-wrapper">
        <section id="reviews" className="reviews">
          <div className="reviews-top">
            <h2 className="reviews-title">Reviews</h2>
            <p className="reviews-count">{hasReviews ? `${pizza.rating} / 5.0 (${reviews.length} reviews)` : `0.0 / 5.0`}</p>
            <a className="reivews-new-review-link" href="#new-review">Write a review</a>
          </div>
          {reviewsMarkup}
        </section>
        <ReviewForm pizzaId={pizzaId} />
        </div>
      </div>
    </main>
  );
};

Pizza.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired,
  }).isRequired
}

export default Pizza;
