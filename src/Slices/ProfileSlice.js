import { createSlice } from '@reduxjs/toolkit';



const  initialState={
    User: localStorage.getItem("User") ? JSON.parse(localStorage.getItem("User")) : null,
    loading: false,
}
const ProfileSlice=createSlice(
    {
        name:"Profile",
        initialState,
        reducers: {
           Setuser(state,value)
           {
            console.log("before update=>" ,state);
            state.User=value.payload;
            const User= value.payload;
            console.log("User=>",User);
            console.log(" after : State,Value=>",state,value);
            
            // add in local storage
            localStorage.setItem("User",JSON.stringify(User));
            


           },
           Setloading(state, value) {
            state.loading = value.payload;
          },
          },

    }
)
export const {setUser,setLoading}=ProfileSlice.actions;
export default ProfileSlice.reducer;
