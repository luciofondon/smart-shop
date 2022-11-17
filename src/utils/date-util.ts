

/**
 * Diff of hours between two dates
 * @param {Date} startDate - first date
 * @param {Date} endDate - second date
 * @returns {number} - hour difference
 */
export const getHoursDiff = (startDate: Date, endDate: Date): number => {
  const msInHour = 1000 * 60 * 60;
  return Math.round(Math.abs(endDate.valueOf() - startDate.valueOf()) / msInHour);
};
