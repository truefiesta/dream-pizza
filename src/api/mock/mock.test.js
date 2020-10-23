import MockApi from "./mock.js";
import pizzasData from "./mock-data/pizzas.json";
import reviewsData from "./mock-data/reviews.json";

describe(`Get pizzas`, () => {
  let api;
  beforeEach(() => {
    api = new MockApi(pizzasData.pizzas, reviewsData.reviews);
  });

  it(`returns pizza objects`, () => {
    const pizzas = api.getAllPizzas();
    expect(pizzas).toHaveLength(11);
  });

  it(`returns reviews for a particular pizza`, () => {
    const pizzaId = "pizza-1";
    const pizzaReviews = api.getPizzaReviews(pizzaId);
    expect(pizzaReviews).toHaveLength(2);
  });

  it(`adds pizza to favorites`, () => {
    expect(api.getFavorites()).toHaveLength(0);
    const pizzaId = "pizza-6";
    api.addToFavorites(pizzaId);
    expect(api.getFavorites()).toHaveLength(1);
  });

  it(`adds items to the cart`, () => {
    expect(api.getCartItems()).toHaveLength(0);

    const pizzaId1 = "pizza-6";
    const crust1 = "thick";
    const size1 = 11;
    const quantity1 = 1;
    const price1 = 10;

    api.addToCart(pizzaId1, crust1, size1, quantity1, price1);
    let cartItems = api.getCartItems();
    expect(cartItems).toHaveLength(1);
    expect(cartItems[0].pizzaId).toEqual(pizzaId1);
    expect(cartItems[0].crust).toEqual(crust1);
    expect(cartItems[0].size).toEqual(size1);
    expect(cartItems[0].quantity).toEqual(quantity1);
    expect(cartItems[0].pricePerOne).toEqual(price1);
  });

    it(`can add the same item twice and the item will be in the cart with the right quantity`, () => {
    expect(api.getCartItems()).toHaveLength(0);
    const pizzaId1 = "pizza-6";
    const crust1 = "thick";
    const size1 = 11;
    const quantity1 = 1;
    const price1 = 10;

    const addedItemId = api.addToCart(pizzaId1, crust1, size1, quantity1, price1);
    let cartItems = api.getCartItems();
    expect(cartItems).toHaveLength(1);
    expect(cartItems[0].id).toEqual(addedItemId);
    expect(cartItems[0].pizzaId).toEqual(pizzaId1);
    expect(cartItems[0].quantity).toEqual(quantity1);

    const addedItemId2 = api.addToCart(pizzaId1, crust1, size1, quantity1, price1);
    expect(addedItemId).toEqual(addedItemId2);
    cartItems = api.getCartItems();
    expect(cartItems).toHaveLength(1);
    expect(cartItems[0].pizzaId).toEqual(pizzaId1);
    expect(cartItems[0].quantity).toEqual(quantity1 + quantity1);
  });

  it(`should throw an error if the same item is added twice, but with a different price`, () => {
    expect(api.getCartItems()).toHaveLength(0);
    const pizzaId1 = "pizza-6";
    const crust1 = "thick";
    const size1 = 11;
    const quantity1 = 1;
    const price1 = 10;
    const addedItemId = api.addToCart(pizzaId1, crust1, size1, quantity1, price1);
    const cartItems = api.getCartItems();
    expect(cartItems).toHaveLength(1);
    expect(cartItems[0].id).toEqual(addedItemId);
    expect(cartItems[0].quantity).toEqual(quantity1);

    const price2 = 20;

    expect(() => {
      api.addToCart(pizzaId1, crust1, size1, quantity1, price2)
    }).toThrow(`Wrong price`);
  });

  it(`removes item from the cart`, () => {
    expect(api.getCartItems()).toHaveLength(0);
    const pizzaId1 = "pizza-6";
    const crust1 = "thick";
    const size1 = 11;
    const quantity1 = 1;
    const price1 = 10;

    const addedItemId = api.addToCart(pizzaId1, crust1, size1, quantity1, price1);
    let cartItems = api.getCartItems();
    expect(cartItems).toHaveLength(1);
    expect(cartItems[0].pizzaId).toEqual(pizzaId1);
    expect(cartItems[0].quantity).toEqual(quantity1);

    api.removeFromCart(addedItemId)
    expect(api.getCartItems()).toHaveLength(0);
  });

  it(`can increase item quantity`, () => {
    expect(api.getCartItems()).toHaveLength(0);
    const pizzaId1 = "pizza-6";
    const crust1 = "thick";
    const size1 = 11;
    const quantity1 = 3;
    const price1 = 10;

    api.addToCart(pizzaId1, crust1, size1, quantity1, price1);
    let cartItems = api.getCartItems();
    expect(cartItems).toHaveLength(1);
    expect(cartItems[0].pizzaId).toEqual(pizzaId1);
    expect(cartItems[0].quantity).toEqual(quantity1);

    const addedItemId = cartItems[0].id;

    api.increaseItemQuantity(addedItemId);
    expect(cartItems).toHaveLength(1);
    expect(cartItems[0].pizzaId).toEqual(pizzaId1);
    expect(cartItems[0].quantity).toEqual(quantity1 + 1);
  });

  it(`can decrease item quantity`, () => {
    expect(api.getCartItems()).toHaveLength(0);
    const pizzaId1 = "pizza-6";
    const crust1 = "thick";
    const size1 = 11;
    const quantity1 = 3;
    const price1 = 10;
    const addedItemId = api.addToCart(pizzaId1, crust1, size1, quantity1, price1);
    api.decreaseItemQuantity(addedItemId);
    let cartItems = api.getCartItems();
    expect(cartItems).toHaveLength(1);
    expect(cartItems[0].quantity).toEqual(quantity1 - 1);
  });

    it(`cannot decrease item quantity if the quantity is equal to one`, () => {
    expect(api.getCartItems()).toHaveLength(0);
    const pizzaId1 = "pizza-6";
    const crust1 = "thick";
    const size1 = 11;
    const quantity1 = 1;
    const price1 = 10;
    const addedItemId = api.addToCart(pizzaId1, crust1, size1, quantity1, price1);
    api.decreaseItemQuantity(addedItemId);
    let cartItems = api.getCartItems();
    expect(cartItems).toHaveLength(1);
    expect(cartItems[0].quantity).toEqual(quantity1);
  });
});
