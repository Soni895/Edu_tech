import { createSlice } from '@reduxjs/toolkit';
import { json } from 'react-router-dom';

const  initialState={
      Token:localStorage.getItem("Token")?(json.parse(localStorage.getItem("Token"))):(null) 
}
const AuthSlice=createSlice(
    {
        name:"Auth",
        initialState,
        reducers: {
           setToken(state,value)
           {
            state.Token=value.payload;
           }
          },

    }
)
export const {setToken}=AuthSlice.actions;
export default AuthSlice.reducer;
