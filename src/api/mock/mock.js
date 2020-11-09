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
    return Promise.resolve(this._pizzas);
  }

  getPizzaReviews(pizzaId) {
    return Promise.resolve(this._reviews.filter(review => review.pizza_id === pizzaId));
  }

  getFavorites() {
    return Promise.resolve(this._favorites.slice());
  }

  addToFavorites(pizzaId) {
    if (!this._favorites.includes(pizzaId)) {
      this._favorites.push(pizzaId);
    }

    return Promise.resolve(this._favorites.slice());
  }

  removeFromFavorites(pizzaId) {
    const pizzaIndex = this._favorites.indexOf(pizzaId);
    if (pizzaIndex !== -1) {
      this._favorites = [...this._favorites.slice(0, pizzaIndex), ...this._favorites.slice(pizzaIndex + 1)];
    }

    return Promise.resolve(this._favorites.slice());
  }

  getCartItems() {
    return Promise.resolve(this._cart.slice());
  }

  addToCart(pizzaId, crust, size, quantity, pricePerOne) {
    const foundItems = this._cart.filter(
      it => it.pizzaId === pizzaId && it.crust === crust && it.size === size
    );

    if (foundItems.length > 0) {
      if (foundItems[0].pricePerOne !== pricePerOne) {
        return Promise.reject(new Error(`Wrong price`));
      }

      foundItems[0].quantity += quantity;
      return Promise.resolve(this._cart.slice());
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
    return Promise.resolve(this._cart.slice());
  }

  removeFromCart(cartItemId) {
    const foundItemIndex = this._cart.findIndex(it => it.id === cartItemId)
    if (foundItemIndex !== -1) {
      this._cart = [...this._cart.slice(0, foundItemIndex), ...this._cart.slice(foundItemIndex + 1)];
    }

    return Promise.resolve(this._cart.slice());
  }

  increaseItemQuantity(cartItemId) {
    const foundItems = this._cart.filter(it => it.id === cartItemId);
    if (foundItems.length === 1) {
      foundItems[0].quantity += 1;
    }

    return Promise.resolve('');
  }

  decreaseItemQuantity(cartItemId) {
    const foundItems = this._cart.filter(it => it.id === cartItemId);
    if (foundItems.length === 1 && foundItems[0].quantity > 1) {
      foundItems[0].quantity -= 1;
    }

    return Promise.resolve('');
  }
}

export default MockApi;
