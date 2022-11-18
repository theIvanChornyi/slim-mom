export const selectDailyRate = state => state.dailyRate.dailyRate;

export const selectNotAllowedProducts = state =>
  state.dailyRate.notAllowedProducts;

export const selectKcalLeft = state => state.dailyRate.kcalLeft;

export const selectKcalConsumed = state => state.dailyRate.kcalConsumed;

export const selectPercentsOfDailyRate = state =>
  state.dailyRate.percentsOfDailyRate;
