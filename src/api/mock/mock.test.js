import MockApi from "./mock.js";
import pizzasData from "../test-data/pizzas.test.json";
import reviewsData from "../test-data/reviews.test.json";
import locationsData from "../test-data/locations.test.json";

describe(`Get pizzas`, () => {
  let api;
  let storage = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn()
  };

  beforeEach(() => {
    api = new MockApi(storage, pizzasData.pizzas, reviewsData.reviews, locationsData.locations);
  });

  it(`returns pizza objects`, () => {
      return api.getAllPizzas().then(pizzas => {
        expect(pizzas).toHaveLength(11);
      })
  });

  it(`returns reviews for a particular pizza`, () => {
    const pizzaId = "pizza-1";
    return api.getPizzaReviews(pizzaId).then(pizzaReviews => {
      expect(pizzaReviews).toHaveLength(2);
    });
  });

  it(`returns reviews with a new added review for a particular pizza`, () => {
    const review = {pizza_id: "pizza-1", text: "new review for pizza-1 #1234"};
    return api.addPizzaReview(review).then(pizzaReviews => {
      expect(pizzaReviews).toHaveLength(3);
      expect(pizzaReviews[2].text).toEqual(review.text);
    });
  });

  it(`returns locations`, () => {
    return api.getLocations().then(locations => {
      expect(locations).toHaveLength(4);
    })
  })

  it(`adds pizza to favorites`, async () => {
    const pizzaId = "pizza-6";

    expect.assertions(2);
    const favorites = await api.addToFavorites(pizzaId);
    expect(favorites).toEqual([pizzaId]);
    const allFavorites = await api.getFavorites();
    expect(allFavorites).toEqual([pizzaId]);
  });

  it(`removes pizza from favorites`, async () => {
    const pizzaId = "pizza-6";
    const pizzaId2 = "pizza-1";

    expect.assertions(2);
    api.addToFavorites(pizzaId)
    const favorites = await api.addToFavorites(pizzaId2);
    expect(favorites).toEqual([pizzaId, pizzaId2]);
    const remainingFavorites = await api.removeFromFavorites(pizzaId2);
    expect(remainingFavorites).toEqual([pizzaId]);
  });

  it(`adds items to the cart`, () => {
    const pizzaId1 = "pizza-6";
    const crust1 = "thick";
    const size1 = 11;
    const quantity1 = 1;
    const price1 = 10;

    api.addToCart(pizzaId1, crust1, size1, quantity1, price1);

    return api.getCartItems().then(cartItems => {
      expect(cartItems).toHaveLength(1);
      expect(cartItems[0].pizza_id).toEqual(pizzaId1);
      expect(cartItems[0].crust).toEqual(crust1);
      expect(cartItems[0].size).toEqual(size1);
      expect(cartItems[0].quantity).toEqual(quantity1);
      expect(cartItems[0].price_per_one).toEqual(price1);
    });
  });

  it(`can add the same item twice and the item will be in the cart with the right quantity`, () => {
    const pizzaId1 = "pizza-6";
    const crust1 = "thick";
    const size1 = 11;
    const quantity1 = 1;
    const price1 = 10;

    api.addToCart(pizzaId1, crust1, size1, quantity1, price1);
    api.addToCart(pizzaId1, crust1, size1, quantity1, price1);

    return api.getCartItems().then(cartItems => {
      expect(cartItems).toHaveLength(1);
      expect(cartItems[0].pizza_id).toEqual(pizzaId1);
      expect(cartItems[0].quantity).toEqual(quantity1 + quantity1);
    })
  });

  it(`should throw an error if the same item is added twice, but with a different price`, () => {
    const pizzaId1 = "pizza-6";
    const crust1 = "thick";
    const size1 = 11;
    const quantity1 = 1;
    const price1 = 10;
    api.addToCart(pizzaId1, crust1, size1, quantity1, price1);
    const price2 = 20;
    expect.assertions(1);

    return api.addToCart(pizzaId1, crust1, size1, quantity1, price2).catch(e => expect(e.message).toMatch(`Wrong price`));
  });

    it(`removes item from the cart`, async () => {
    const pizzaId1 = "pizza-6";
    const crust1 = "thick";
    const size1 = 11;
    const quantity1 = 1;
    const price1 = 10;
    expect.assertions(1);

    const addedItems = await api.addToCart(pizzaId1, crust1, size1, quantity1, price1);
    const addedItemsIndex = addedItems[0].id;
    await api.removeFromCart(addedItemsIndex);
    const cartItems = await api.getCartItems();
    expect(cartItems).toHaveLength(0);

    // return api.addToCart(pizzaId1, crust1, size1, quantity1, price1)
    //   .then(id => {
    //     return api.removeFromCart(id);
    //   })
    //   .then(() => {
    //     return api.getCartItems();
    //   })
    //   .then((cartItems) => {
    //     expect(cartItems).toHaveLength(0);
    //   });
  });

  it(`removes all items from the cart`, async () => {
    const pizzaId1 = "pizza-6";
    const pizzaId2 = "pizza-1";
    const crust1 = "thick";
    const size1 = 11;
    const quantity1 = 3;
    const price1 = 10;
    expect.assertions(2);

    await api.addToCart(pizzaId1, crust1, size1, quantity1, price1);
    await api.addToCart(pizzaId2, crust1, size1, quantity1, price1);
    const cartItems = await api.getCartItems();
    expect(cartItems).toHaveLength(2);
    await api.cleanCart();
    const cartItemsAfterCleanUp = await api.getCartItems();
    expect(cartItemsAfterCleanUp).toHaveLength(0);
  })

  it(`can increase item quantity`, async () => {
    const pizzaId1 = "pizza-6";
    const crust1 = "thick";
    const size1 = 11;
    const quantity1 = 3;
    const price1 = 10;
    expect.assertions(3);

    const addedItems = await api.addToCart(pizzaId1, crust1, size1, quantity1, price1);
    const addedItemId = addedItems[0].id;
    await api.increaseItemQuantity(addedItemId);
    const cartItems = await api.getCartItems();

    expect(cartItems).toHaveLength(1);
    expect(cartItems[0].pizza_id).toEqual(pizzaId1);
    expect(cartItems[0].quantity).toEqual(quantity1 + 1);
  });

  it(`can decrease item quantity`, async () => {
    const pizzaId1 = "pizza-6";
    const crust1 = "thick";
    const size1 = 11;
    const quantity1 = 3;
    const price1 = 10;
    expect.assertions(2);

    const addedItems = await api.addToCart(pizzaId1, crust1, size1, quantity1, price1);
    const addedItemId = addedItems[0].id;
    await api.decreaseItemQuantity(addedItemId);
    let cartItems = await api.getCartItems();

    expect(cartItems).toHaveLength(1);
    expect(cartItems[0].quantity).toEqual(quantity1 - 1);
  });

    it(`cannot decrease item quantity if the quantity is equal to one`, async () => {
    const pizzaId1 = "pizza-6";
    const crust1 = "thick";
    const size1 = 11;
    const quantity1 = 1;
    const price1 = 10;
    expect.assertions(2);

    const addedItemId = await api.addToCart(pizzaId1, crust1, size1, quantity1, price1);
    await api.decreaseItemQuantity(addedItemId);
    let cartItems = await api.getCartItems();

    expect(cartItems).toHaveLength(1);
    expect(cartItems[0].quantity).toEqual(quantity1);
  });
});
