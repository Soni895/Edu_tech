import { createSlice } from '@reduxjs/toolkit';


const  initialState={
    user:null,
}
const ProfileSlice=createSlice(
    {
        name:"Profile",
        initialState,
        reducers: {
           setUser(state,value)
           {
            state.user=value.payload;
           }
          },

    }
)
export const {setUser}=ProfileSlice.actions;
export default ProfileSlice.reducer;
