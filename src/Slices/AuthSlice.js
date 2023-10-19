import { createSlice } from '@reduxjs/toolkit';
import { json } from 'react-router-dom';

const  initialState={
      Token:localStorage.getItem("Token")?(json.parse(localStorage.getItem("Token"))):(null),
      signupData: null,
      loading: false,
}
const AuthSlice=createSlice(
    {
      
        name:"Auth",
        initialState,
        reducers: {
           setToken(state,value)
           {
            state.Token=value.payload;
           },
           setLoading(state, value) {
            state.loading = value.payload;
          },
          setToken(state, value) {
            state.token = value.payload;
          },

          },

    }
)
export const {setSignupData, setLoading,setToken}=AuthSlice.actions;
export default AuthSlice.reducer;
