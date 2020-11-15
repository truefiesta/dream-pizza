import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.PAYMENT;

export const selectIsAccess = state => state[NAME_SPACE].isAccess;
