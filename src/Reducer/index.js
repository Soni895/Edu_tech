import { combineReducers } from 'redux';
import  AuthSlice from "../Slices/AuthSlice";
import CartSlice from '../Slices/CartSlice';
import Profileslice from '../Slices/ProfileSlice';
import CourseSlice from '../Slices/CourseSlice';

const Rootreducer= combineReducers(
    {
        Auth:AuthSlice,
        Profile:Profileslice,
        Cart:CartSlice,
        Course:CourseSlice,
    }
);
export default Rootreducer