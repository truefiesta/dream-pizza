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
