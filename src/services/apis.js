const BASE_URL = process.env.REACT_APP_BASE_URL;

// AUTH ENDPOINTS
export const endpoints = {
  SENDOTP_API: BASE_URL + "/sendOTP",
  SIGNUP_API: BASE_URL + "/signup",
  LOGIN_API: BASE_URL + "/login",
  SHOW_ALL_CATEGORIES_API: BASE_URL + "/showAllCategories",
  CREATE_CATEGORY_API: BASE_URL + "/createCategory",
  DELETE_CATEGORY_API: BASE_URL + "/deleteCategory",
  UPDATE_CATEGORY_NAME_API: BASE_URL + "/updateCategoryName",
  UPDATE_CATEGORY_ICON_API: BASE_URL + "/updateCategoryIcon",
};
