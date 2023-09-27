import { combineReducers } from 'redux';
import  Authreducer from "../Slices/AuthSlice";

const Rootreducer= combineReducers(
    {
        Auth:Authreducer,


    }
);
export default Rootreducer