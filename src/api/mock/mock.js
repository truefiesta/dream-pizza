import _ from "lodash";
import { nanoid } from "nanoid";

const StorageKey = {
  REVIEWS: "reviews",
  FAVORITES: "favorites",
  CART: "cart"
};

class MockApi {
  constructor(storage, pizzas, reviews, locations) {
    this._pizzas = _.cloneDeep(pizzas);
    this._locations = _.cloneDeep(locations);
    this._setStorage(storage, reviews);
  }

  _setStorage(storage, reviews) {
    this._storage = storage;
    this._reviews = this._storage.getItem(StorageKey.REVIEWS) ? JSON.parse(this._storage.getItem(StorageKey.REVIEWS)) : _.cloneDeep(reviews);
    this._favorites = this._storage.getItem(StorageKey.FAVORITES) ? JSON.parse(this._storage.getItem(StorageKey.FAVORITES)) : [];
    this._cart = this._storage.getItem(StorageKey.CART) ? JSON.parse(this._storage.getItem(StorageKey.CART)) : [];
  }

  getAllPizzas() {
    return Promise.resolve(this._pizzas);
  }

  getPizzaReviews(pizzaId) {
    return Promise.resolve(this._reviews.filter(review => review.pizza_id === pizzaId));
  }

  getLocations() {
    return Promise.resolve(this._locations);
  }

  getTestPizzaReviews(pizzaId) {
    return this._reviews.filter(review => review.pizza_id === pizzaId);
  }

  getFavorites() {
    return Promise.resolve(this._favorites.slice());
  }

  addPizzaReview(review) {
    const newReview = Object.assign({}, review, {id: nanoid()});
    this._reviews.push(newReview);
    this._storage.setItem(StorageKey.REVIEWS, JSON.stringify(this._reviews));

    return Promise.resolve(this.getPizzaReviews(newReview.pizza_id));
  }

  addToFavorites(pizza_id) {
    if (!this._favorites.includes(pizza_id)) {
      this._favorites.push(pizza_id);
      this._storage.setItem(StorageKey.FAVORITES, JSON.stringify(this._favorites));
    }

    return Promise.resolve(this._favorites.slice());
  }

  removeFromFavorites(pizza_id) {
    const pizzaIndex = this._favorites.indexOf(pizza_id);
    if (pizzaIndex !== -1) {
      this._favorites = [...this._favorites.slice(0, pizzaIndex), ...this._favorites.slice(pizzaIndex + 1)];
      this._storage.setItem(StorageKey.FAVORITES, JSON.stringify(this._favorites));
    }

    return Promise.resolve(this._favorites.slice());
  }

  getTestCartItems() {
    return this._cart.slice();
  }

  getCartItems() {
    return Promise.resolve(this._cart.slice());
  }

  addToCart(pizza_id, crust, size, quantity, price_per_one) {
    const foundItems = this._cart.filter(
      it => it.pizza_id === pizza_id && it.crust === crust && it.size === size
    );

    if (foundItems.length > 0) {
      if (foundItems[0].price_per_one !== price_per_one) {
        return Promise.reject(new Error(`Wrong price`));
      }

      foundItems[0].quantity += quantity;
      return Promise.resolve(this._cart.slice());
    }

    const newCartItem = {
      id: nanoid(),
      pizza_id,
      crust,
      size,
      quantity,
      price_per_one
    }

    this._cart.push(newCartItem);
    this._storage.setItem(StorageKey.CART, JSON.stringify(this._cart));

    return Promise.resolve(this._cart.slice());
  }

  removeFromCart(cartItemId) {
    const foundItemIndex = this._cart.findIndex(it => it.id === cartItemId)
    if (foundItemIndex !== -1) {
      this._cart = [...this._cart.slice(0, foundItemIndex), ...this._cart.slice(foundItemIndex + 1)];
    }
    this._storage.setItem(StorageKey.CART, JSON.stringify(this._cart));

    return Promise.resolve(this._cart.slice());
  }

  cleanCart() {
    this._cart = [];
    this._storage.setItem(StorageKey.CART, JSON.stringify(this._cart));

    return Promise.resolve(this._cart.slice());
  }

  increaseItemQuantity(cartItemId) {
    const foundItems = this._cart.filter(it => it.id === cartItemId);
    if (foundItems.length === 1) {
      foundItems[0].quantity += 1;
      this._storage.setItem(StorageKey.CART, JSON.stringify(this._cart));
    }

    return Promise.resolve(this._cart.slice());
  }

  decreaseItemQuantity(cartItemId) {
    const foundItems = this._cart.filter(it => it.id === cartItemId);
    if (foundItems.length === 1 && foundItems[0].quantity > 1) {
      foundItems[0].quantity -= 1;
      this._storage.setItem(StorageKey.CART, JSON.stringify(this._cart));
    }

    return Promise.resolve(this._cart.slice());
  }
}

export default MockApi;
