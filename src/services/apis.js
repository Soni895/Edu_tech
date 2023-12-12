const BASE_URL = process.env.REACT_APP_Base_Url;

console.log("Base_Url=>",BASE_URL);


// AUTH ENDPOINTS  completed
export const AuthEndpoints = {
  SENDOTP_API: BASE_URL + "/Auth/sendotp",
  SIGNUP_API: BASE_URL + "/Auth/signup",
  LOGIN_API: BASE_URL + "/Auth/login",
  RESETPASSTOKEN_API: BASE_URL + "/Auth/reset-password-token",
  RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
}

// PROFILE ENDPOINTS  completed
export const ProfileEndpoints = {
  GET_USER_DETAILS_API: BASE_URL + "/profile/GetallUserDetailes",
  GET_USER_ENROLLED_COURSES_API: BASE_URL + "/profile/GetEnrolledCourses",
  GET_INSTRUCTOR_DATA_API: BASE_URL + "/profile/InstructorDashboard",
}
 
// STUDENTS ENDPOINTS  pending
export const StudentEndpoints = {
  COURSE_PAYMENT_API: BASE_URL + "/Payment/capturePayment",
  COURSE_VERIFY_API: BASE_URL + "/Payment/VerifySignature",
  SEND_PAYMENT_SUCCESS_EMAIL_API: BASE_URL + "/Payment/sendPaymentSuccessEmail",
}

// COURSE ENDPOINTS
export const CourseEndpoints = {
  GET_ALL_COURSE_API: BASE_URL + "/course/GetAllCourses",
  COURSE_DETAILS_API: BASE_URL + "/course/GetCourseDetails",
  EDIT_COURSE_API: BASE_URL + "/course/EditCourse",
  COURSE_CATEGORIES_API: BASE_URL + "/course/GetAllCategory",
  CREATE_COURSE_API: BASE_URL + "/course/DeleteCourse",
  CREATE_SECTION_API: BASE_URL + "/course/CreateSection",
  CREATE_SUBSECTION_API: BASE_URL + "/course/CreateSubsection",
  UPDATE_SECTION_API: BASE_URL + "/course/UpdateSection",
  UPDATE_SUBSECTION_API: BASE_URL + "/course/UpdateSubSection",
  GET_ALL_INSTRUCTOR_COURSES_API: BASE_URL + "/course/GetInstructorCourses",
  DELETE_SECTION_API: BASE_URL + "/course/DeleteSection",
  DELETE_SUBSECTION_API: BASE_URL + "/course/DeleteSubsection",
  DELETE_COURSE_API: BASE_URL + "/course/DeleteCourse",
  GET_FULL_COURSE_DETAILS_AUTHENTICATED:
    BASE_URL + "/course/GetFullCourseDetails",
  LECTURE_COMPLETION_API: BASE_URL + "/course/UpdateCourseProgress",
 
}

// RATINGS AND REVIEWS  completed
export const RatingsEndpoints = {
  REVIEWS_DETAILS_API: BASE_URL + "/course/GetReviews",
  CREATE_RATING_API: BASE_URL + "/course/CreateRating",
}

// CATAGORIES API
export const Categories = {
  CATEGORIES_API: BASE_URL+"/Course/GetAllCategory",
}

// CATALOG PAGE DATA
export const catalogData = {
  CATALOGPAGEDATA_API: BASE_URL + "/course/CategoryPageDetailes",
}
// CONTACT-US API
export const contactusEndpoint = {
  CONTACT_US_API: BASE_URL + "/contact",
}

// SETTINGS PAGE API
export const settingsEndpoints = {
  UPDATE_DISPLAY_PICTURE_API: BASE_URL + "/profile/UpdateDisplayPicture",
  UPDATE_PROFILE_API: BASE_URL + "/profile/UpdateProfile",
  CHANGE_PASSWORD_API: BASE_URL + "/auth/Changepassword",
  DELETE_PROFILE_API: BASE_URL + "/profile/DeleteAccout",
}
