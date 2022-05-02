import { employerTypes } from "./employer-types";

export const setMyVanacies = (payload) => ({
  type: employerTypes.SET_MY_VACANCIES,
  vacancies: payload,
});

export const getCategories = (payload) => ({
  type: employerTypes.GET_CATEGORIES,
  categories: payload,
});