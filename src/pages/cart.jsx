import React from "react";
import { useSelector } from "react-redux";
import { selectAllInCart } from "../reducer/pizzas/selectors.js";

import Breadcrumbs from "../components/breadcrumbs/breadcrumbs.jsx";
import CardCart from "../components/card-cart/card-cart.jsx";
import CartTotal from "../components/cart-total/cart-total.jsx";

const Cart = () => {
  const pizzasInCart = useSelector(selectAllInCart);
  console.log(pizzasInCart);
  const isEmpty = pizzasInCart.length === 0 ? true : false;
  const cartListMarkup = (
    <ul className="cart-list">
      {pizzasInCart.map(pizza => <CardCart key={pizza.id} cartObj={pizza} />)}
    </ul>
  );

  return (
    <main className="cart-page">
      <div className="wrapper">
        <Breadcrumbs />
        <h1 className="main-title">My order</h1>
        <div className="cart-container">
          {isEmpty ? <p className="cart-empty">Your cart is Empty</p> : cartListMarkup}
          <CartTotal cart={pizzasInCart} />
        </div>
      </div>
    </main>
  )
};

export default Cart;
