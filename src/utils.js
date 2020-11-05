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
