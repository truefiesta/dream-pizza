import _ from "lodash";
import { nanoid } from "nanoid";

class MockApi {
  constructor(pizzas, reviews) {
    this._pizzas = _.cloneDeep(pizzas);
    this._reviews = _.cloneDeep(reviews);
    this._favorites = [];
    this._cart = [];
  }

  getAllPizzas() {
    return this._pizzas;
  }

  getPizzaReviews(pizzaId) {
    return this._reviews.filter(review => review.pizza_id === pizzaId);
  }

  getFavorites() {
    return this._favorites;
  }

  addToFavorites(pizzaId) {
    if (!this._favorites.includes(pizzaId)) {
      this._favorites.push(pizzaId);
    }
  }

  removeFromFavorites(pizzaId) {
    const pizzaIndex = this._favorites.indexOf(pizzaId);
    if (pizzaIndex !== -1) {
      this._favorites = [...this._favorites.slice(0, pizzaIndex), ...this._favorites(pizzaIndex + 1)];
    }
  }

  getCartItems() {
    return this._cart;
  }

  addToCart(pizzaId, crust, size, quantity, pricePerOne) {
    const foundItems = this._cart.filter(
      it => it.pizzaId === pizzaId && it.crust === crust && it.size === size
    );

    if (foundItems.length > 0) {
      if (foundItems[0].pricePerOne !== pricePerOne) {
        throw new Error(`Wrong price`);
      }

      foundItems[0].quantity += quantity;
      return foundItems[0].id;
    }

    const newCartItem = {
      id: nanoid(),
      pizzaId,
      crust,
      size,
      quantity,
      pricePerOne
    }

    this._cart.push(newCartItem);
    return newCartItem.id;
  }

  removeFromCart(cartItemId) {
    const foundItemIndex = this._cart.findIndex(it => it.id === cartItemId)
    if (foundItemIndex !== -1) {
      this._cart = [...this._cart.slice(0, foundItemIndex), ...this._cart.slice(foundItemIndex + 1)];
    }
  }

  increaseItemQuantity(cartItemId) {
    const foundItems = this._cart.filter(it => it.id === cartItemId);
    if (foundItems.length === 1) {
      foundItems[0].quantity += 1;
    }
  }

  decreaseItemQuantity(cartItemId) {
    const foundItems = this._cart.filter(it => it.id === cartItemId);
    if (foundItems.length === 1 && foundItems[0].quantity > 1) {
      foundItems[0].quantity -= 1;
    }
  }
}

export default MockApi;
