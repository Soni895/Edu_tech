import { combineReducers } from 'redux';
import  AuthSlice from "../Slices/AuthSlice";
import CartSlice from '../Slices/CartSlice';
import Profileslice from '../Slices/ProfileSlice';
import CourseSlice from '../Slices/CourseSlice';
import ViewCourseSlice from "../Slices/ViewCourseSlice";

const Rootreducer= combineReducers(
    {
        Auth:AuthSlice,
        Profile:Profileslice,
        Cart:CartSlice,
        Course:CourseSlice,
        ViewCourse:ViewCourseSlice
    }
);
export default Rootreducer