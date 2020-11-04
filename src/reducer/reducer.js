import NameSpace from "./name-space.js";
import { combineReducers } from "redux";
import { reducer as pizzas } from "./pizzas/pizzas.js";

export default combineReducers({
  [NameSpace.PIZZAS]: pizzas
});
