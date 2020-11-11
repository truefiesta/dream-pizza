const createPizza = (pizza) => {
  return {
    "id": pizza.id,
    "image": pizza.image,
    "name": pizza.name,
    "type": pizza.type,
    "rating": pizza.rating,
    "kcal": pizza.kcal,
    "ingredients": {
      "sauces": pizza.ingredients.sauces,
      "mainIngredients": pizza.ingredients.main_ingredients,
      "toppings": pizza.ingredients.toppings
    },
    "prices": {
      "thin": {
        "small": pizza.prices.thin.small,
        "medium": pizza.prices.thin.medium,
        "large": pizza.prices.thin.large,
      },
      "thick": {
        "small": pizza.prices.thick.small,
        "medium": pizza.prices.thick.medium,
        "large": pizza.prices.thick.large,
      }
    },
    "discountPercent": pizza.discount_percent,
    "isNew": pizza.is_new,
    "isTop": pizza.is_top
  }
}

export { createPizza };
const createPizzaCartItem = (pizzaCartItem) => {
  return {
    id: pizzaCartItem.id,
    pizzaId: pizzaCartItem.pizza_id,
    crust: pizzaCartItem.crust,
    size: pizzaCartItem.size,
    quantity: pizzaCartItem.quantity,
    pricePerOne: pizzaCartItem.price_per_one
  }
};
