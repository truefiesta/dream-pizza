import NameSpace from "../name-space.js";
const NAME_SPACE = NameSpace.LOCATIONS;

export const selectLocations = state => state[NAME_SPACE].locations;
