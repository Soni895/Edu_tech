import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { json } from 'react-router-dom';

const  initialState={
   TotalItems:localStorage.getItem("totalItems")?json.parse(localStorage.getItem("totalItems")):0
};
const CartSlice=createSlice(
    {
         name:"Cart",
        initialState,
        reducers: {
           setTotalItems(state,value)
           {
            state.user=value.payload;
           }


        //    add to cart
        //    remove to cart
        //    reset cart
        
          },

    }
)
export const {setTotalItems}=CartSlice.actions;
export default CartSlice.reducer;
