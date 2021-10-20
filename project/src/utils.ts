const getPercentRating = (rating: number): number => {
  const percentRating: number = rating / 5 * 100;
  return percentRating;
};

export { getPercentRating };
