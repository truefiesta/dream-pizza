import { Tag, FilterByType, IngredientTypes } from "./const.js";

export const capitalize = (str) => {
  if (str === '') {
    return str;
  }

  const firstLetter = str.charAt(0);
  return firstLetter.toUpperCase() + str.slice(1);
};

export const convertStarRatingToWidthPercent = (rating) => {
  return Math.floor(rating) * 20;
};

export const getItemsForPageNumber = (page, maxItemsPerPage, items) => {
  let indexOfFirstItemToShow;
  if (page === 1) {
    indexOfFirstItemToShow = 0;
  } else {
    indexOfFirstItemToShow = (page - 1) * maxItemsPerPage;
  }
  let indexOfLastItemToShow = page * maxItemsPerPage;

  return items.slice(indexOfFirstItemToShow, indexOfLastItemToShow);
}

export const filterByType = (type) => (pizza) => {
  if (type === FilterByType.ANY_TYPE) {
    return true;
  }

  return pizza.type === type;
};

export const filterByPrice = (price) => (pizza) => {
  let initialPrice = pizza.prices.thin.small;
  let currentPrice;
  if(pizza.discountPercent > 0) {
    currentPrice = (initialPrice - (initialPrice * pizza.discountPercent / 100)).toFixed(0);
  } else {
    currentPrice = initialPrice;
  }

  return currentPrice <= price;
};

export const filterByIngredients = (ingredientTypes) => (pizza) => {
  if (ingredientTypes.length === 0) {
    return true;
  }

  const joinedIngredientTypes = ingredientTypes.reduce((acc, type) => {
    return acc.concat(IngredientTypes[type]);
  }, []);

  return pizza.ingredients.mainIngredients
    .some(ingredient => {
      return joinedIngredientTypes.includes(ingredient);
    })
};

export const filterByTags = (currentTags) => (pizza) => {
  if (currentTags.length === 0) {
    return true;
  }

  if (currentTags.includes(Tag.DISCOUNT) && pizza.discountPercent > 0) {
    return true;
  }

  if (currentTags.includes(Tag.NEW) && pizza.isNew) {
    return true;
  }

  if (currentTags.includes(Tag.TOP) && pizza.isTop) {
    return pizza.isTop;
  }

  return false;
};

export const filterPizzas = (pizzas, type, ingredientTypes, price, tags) => {
  return pizzas.filter(filterByType(type))
    .filter(filterByIngredients(ingredientTypes))
    .filter(filterByPrice(price))
    .filter(filterByTags(tags));
};
