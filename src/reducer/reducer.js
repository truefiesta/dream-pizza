import NameSpace from "./name-space.js";
import { combineReducers } from "redux";
import { reducer as pizzas } from "./pizzas/pizzas.js";
import { reducer as filters } from "./filters/filters.js";
import { reducer as locations } from "./locations/locations.js";
import { reducer as payment } from "./payment/payment.js";

export default combineReducers({
  [NameSpace.PIZZAS]: pizzas,
  [NameSpace.FILTERS]: filters,
  [NameSpace.LOCATIONS]: locations,
  [NameSpace.PAYMENT]: payment,
});
