// const REACT_APP_Base_Url=process.env.Base_Url
const BASE_URL="http://localhost:4000/api/v1/";

console.log("REACT_APP_Base_Url=>",BASE_URL);

export const Categories= 
{
  Category_Api: BASE_URL+"/Course/GetAllCategory",

}


// AUTH ENDPOINTS
export const endpoints = {
  SENDOTP_API: BASE_URL + "/auth/sendotp",
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
  RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
  RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
}