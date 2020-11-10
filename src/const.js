export const AppRoute = {
  CART: `/cart`,
  FAVORITES: `/favorites`,
  LOGIN: `/login`,
  MENU: `/menu`,
  PIZZA: `/pizza/:id`,
  PIZZA_CREATOR: `/pizza-creator`,
  HOME: `/`,
};

export const Tag = {
  NEW: `new`,
  TOP: `top`,
  DISCOUNT: `discount`
};

export const FilterByType = {
  ANY_TYPE: `any`,
  TRADITIONAL: `traditional`,
  VEGETARIAN: `vegetarian`
};

export const FilterByIngredients = {
  SEAFOOD: `seafood`,
  CHICKEN: `chicken`,
  MEAT: `meat`
};

export const IngredientTypes = {
  [FilterByIngredients.SEAFOOD]: [`mixed seafood`, `prawns`, `shrimps`, `fish`, `salmon`],
  [FilterByIngredients.CHICKEN]: [`grilled chicken`, `chicken`, `bbq chicken`],
  [FilterByIngredients.MEAT]: [`pepperoni`, `italian sausage`, `bacon`, `double pepperoni`, `ham`]
};

export const typesOptions = Object.values(FilterByType);
export const ingredientOptions = Object.values(FilterByIngredients);
export const tagOptions = Object.values(Tag);

export const InchesToSizeTitle = {
  "13": `small`,
  "14": `medium`,
  "15": `large`,
};

export const PIZZA_OPTION = {
  CRUST: `crust`,
  SIZE: `size`
}

export const CRUST_TYPE = {
  THICK: `thick`,
  THIN: `thin`,
};

export const crustTypes = Object.values(CRUST_TYPE);

export const PIZZA_SIZE = {
  SMALL: `13`,
  MEDIUM: `14`,
  LARGE: `15`,
};

export const pizzaSizes = Object.values(PIZZA_SIZE);

export const FavoritesClass = {
  DETAILS: `pizza-details-favorites-button`,
  BASIC: `card-button favorites-button`
};

export const MIN_PIZZA_QUANTITY = 1;
