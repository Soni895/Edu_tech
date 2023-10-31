const BASE_URL = process.env.REACT_APP_Base_Url;

console.log("Base_Url=>",BASE_URL);

export const Categories= 
{
  CATEGORIES_API: BASE_URL+"/Course/GetAllCategory",
}


// AUTH ENDPOINTS
export const endpoints = {
  SENDOTP_API: BASE_URL + "/Auth/sendotp",
  SIGNUP_API: BASE_URL + "/Auth/signup",
  LOGIN_API: BASE_URL + "/Auth/login",
  RESETPASSTOKEN_API: BASE_URL + "/Auth/reset-password-token",
  RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
}

// CONTACT-US API
export const contactusEndpoint = {
  CONTACT_US_API: BASE_URL + "/reach/contact",
}