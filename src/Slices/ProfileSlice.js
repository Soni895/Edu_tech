import { createSlice } from '@reduxjs/toolkit';


const  initialState={
    User: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
    loading: false,
}
const ProfileSlice=createSlice(
    {
        name:"Profile",
        initialState,
        reducers: {
           setUser(state,value)
           {
            state.User=value.payload;
           },
           setLoading(state, value) {
            state.loading = value.payload;
          },
          },

    }
)
export const {setUser,setLoading}=ProfileSlice.actions;
export default ProfileSlice.reducer;
