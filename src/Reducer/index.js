import { combineReducers } from 'redux';
import  AuthSlice from "../Slices/AuthSlice";
import CartSlice from '../Slices/CartSlice';
import Profileslice from '../Slices/ProfileSlice';

const Rootreducer= combineReducers(
    {
        Auth:AuthSlice,
        Profile:Profileslice,
        Cart:CartSlice,
    }
);
export default Rootreducer