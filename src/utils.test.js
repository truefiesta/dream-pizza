import { filterByType, filterByPrice, filterByIngredients, filterByTags, filterPizzas } from "./utils.js";
import { FilterByType, FilterByIngredients, Tag } from "./const.js";
import { createPizza } from "../src/adapters/adapters.js";

const pizzas = [{
      "id": "pizza-8",
      "image": "img/pizza-8.png",
      "name": "Margherita",
      "type": "traditional",
      "rating": 4.5,
      "kcal": 240,
      "ingredients": {
        "sauces": ["tomato sauce"],
        "main_ingredients": ["mozzarella"],
        "toppings": ["oregano", "fresh basil"]
      },
      "prices": {
        "thin": {
          "small": 10,
          "medium": 12,
          "large": 14
        },
        "thick": {
          "small": 11,
          "medium": 13,
          "large": 15
        }
      },
      "discount_percent": 15,
      "is_new": false,
      "is_top": false
    },
    {
      "id": "pizza-9",
      "image": "img/pizza-9.png",
      "name": "Napoletana",
      "type": "vegetarian",
      "rating": 4.5,
      "kcal": 240,
      "ingredients": {
        "sauces": ["tomato sauce"],
        "main_ingredients": ["mozzarella", "green olives", "grilled chicken"],
        "toppings": ["oregano"]
      },
      "prices": {
        "thin": {
          "small": 10,
          "medium": 12,
          "large": 14
        },
        "thick": {
          "small": 11,
          "medium": 13,
          "large": 15
        }
      },
      "discount_percent": 0,
      "is_new": true,
      "is_top": false
    },
    {
      "id": "pizza-10",
      "image": "img/pizza-10.png",
      "name": "Seafood",
      "type": "traditional",
      "rating": 4.5,
      "kcal": 240,
      "ingredients": {
        "sauces": ["tomato sauce"],
        "main_ingredients": ["mixed seafood", "prawns", "mozzarella", "garlic"],
        "toppings": ["oregano"]
      },
      "prices": {
        "thin": {
          "small": 13,
          "medium": 14,
          "large": 15
        },
        "thick": {
          "small": 14,
          "medium": 15,
          "large": 16
        }
      },
      "discount_percent": 0,
      "is_new": false,
      "is_top": true
    }
  ];

const testPizzas = pizzas.map(pizza => createPizza(pizza));

it(`filterByType returns pizzas with type`, () => {

  const pizzasByType = testPizzas.filter(filterByType(FilterByType.TRADITIONAL));
  expect(pizzasByType).toHaveLength(2);
});

it(`filterByType returns all pizzas when type is "any"`, () => {
  const pizzasByType = testPizzas.filter(filterByType(FilterByType.ANY_TYPE));
  expect(pizzasByType).toHaveLength(3);
});

it(`filterByPrice returns pizzas with the correct price`, () => {
  const testPrice = 15;
  const pizzasByPrice = testPizzas.filter(filterByPrice(testPrice));
  expect(pizzasByPrice).toHaveLength(2);
});

it(`filterByIngredients with any ingredients form the ingredient types`, () => {
  const ingredientTypes = [FilterByIngredients.CHICKEN, FilterByIngredients.SEAFOOD];
  const pizzasByIngredients = testPizzas.filter(filterByIngredients(ingredientTypes));
  expect(pizzasByIngredients).toHaveLength(2);
});

it(`filterByTags with any of the tags from the tags array`, () => {
  const tags = [Tag.DISCOUNT, Tag.NEW];
  const pizzasByTags = testPizzas.filter(filterByTags(tags));
  expect(pizzasByTags).toHaveLength(2);
});

it(`filterPizzas returns vegetarian pizzas`, () => {
  const price = 16;
  const tags = [];
  const type = FilterByType.VEGETARIAN;
  const ingredients = [];

  const pizzas = filterPizzas(testPizzas, type, ingredients, price, tags);
  expect(pizzas).toHaveLength(1);
});

it(`filterPizzas returns seafood pizzas`, () => {
  const price = 16;
  const tags = [];
  const type = FilterByType.ANY_TYPE;
  const ingredients = [FilterByIngredients.SEAFOOD];

  const pizzas = filterPizzas(testPizzas, type, ingredients, price, tags);
  expect(pizzas).toHaveLength(1);
});

it(`filterPizzas returns traditions pizzas with chicken`, () => {
  const price = 16;
  const tags = [];
  const type = FilterByType.TRADITIONAL;
  const ingredients = [FilterByIngredients.CHICKEN];

  const pizzas = filterPizzas(testPizzas, type, ingredients, price, tags);
  expect(pizzas).toHaveLength(0);
});

it(`filterPizzas returns traditions pizzas`, () => {
  const price = 16;
  const tags = [];
  const type = FilterByType.TRADITIONAL;
  const ingredients = [];

  const pizzas = filterPizzas(testPizzas, type, ingredients, price, tags);
  expect(pizzas).toHaveLength(2);
});
