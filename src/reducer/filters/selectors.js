import NameSpace from "../name-space.js";
import { createSelector } from "reselect";
import { selectPizzas } from "../pizzas/selectors.js";
import { Tag } from "../../const.js";

const NAME_SPACE = NameSpace.FILTERS;

export const selectCurrentTag = state => state[NAME_SPACE].currentTag;

export const selectPizzasWithTag = createSelector(
  selectPizzas,
  selectCurrentTag,
  (pizzas, tag) => pizzas.filter(pizza => {
    if (tag === Tag.NEW) {
      return pizza.isNew;
    } else if (tag === Tag.TOP) {
      return pizza.isTop;
    } else if (tag === Tag.DISCOUNT) {
      return pizza.discountPercent > 0;
    } else {
      return pizza;
    }
  })
);
