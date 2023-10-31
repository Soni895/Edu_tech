import { createSlice } from '@reduxjs/toolkit';


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
            localStorage.setItem("Token",JSON.stringify(state.Token));

           },
           setloading(state, value) {
            state.loading = value.payload;
          },
          setSignupdata(state, value) {
            state.Signupdata = value.payload;
            
          },

          },

    }
)
export const {setSignupData, setLoading,setToken}=AuthSlice.actions;
export default AuthSlice.reducer;
