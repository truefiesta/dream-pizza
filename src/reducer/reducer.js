import NameSpace from "./name-space.js";
import { combineReducers } from "redux";
import { reducer as pizzas } from "./pizzas/pizzas.js";
import { reducer as filters } from "./filters/filters.js";

export default combineReducers({
  [NameSpace.PIZZAS]: pizzas,
  [NameSpace.FILTERS]: filters,
});
