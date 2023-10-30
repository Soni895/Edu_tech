import { createSlice } from '@reduxjs/toolkit';
import { json } from 'react-router-dom';

const  initialState={ 
      Token:localStorage.getItem("Token")?(JSON.parse(localStorage.getItem("Token"))):(null),
      Signupdata: null,
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
           setloading(state, v) {
            state.loading = v.payload;
          },
          setToken(state, value) {
            state.token = value.payload;
          },

          },

    }
)
export const {setSignupData, setLoading,setToken}=AuthSlice.actions;
export default AuthSlice.reducer;
