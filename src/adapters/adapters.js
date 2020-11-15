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
};

const createReview = (review) => {
  return {
    "user": {
      "id": review.user.id,
      "name": review.user.name,
      "avatar": review.user.avatar,
    },
    "id": review.id,
    "rating": review.rating,
    "date": review.date,
    "pizzaId": review.pizza_id,
    "text": review.text
  }
};

const createPizzaCartItem = (pizzaCartItem) => {
  return {
    id: pizzaCartItem.id,
    pizzaId: pizzaCartItem.pizza_id,
    crust: pizzaCartItem.crust,
    size: pizzaCartItem.size,
    quantity: pizzaCartItem.quantity,
    pricePerOne: parseInt(pizzaCartItem.price_per_one, 10)
  }
};

export { createPizza, createReview, createPizzaCartItem };
