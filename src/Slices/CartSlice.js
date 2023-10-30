import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { json } from 'react-router-dom';

const  initialState={
   Totalitems:localStorage.getItem("totalItems")?json.parse(localStorage.getItem("totalItems")):0,
   Total:null,
   Cart:null,
};
const CartSlice=createSlice(
    {
         name:"Cart",
        initialState,
        reducers: {
           setTotalItems(state,value)
           {
            state.user=value.payload;
           },
           removeitem()
           {
             console.log("hi");
           }


        //    add to cart
        //    remove to cart
        //    reset cart
        
          },

    }
)
export const {setTotalItems,removeitem}=CartSlice.actions;
export default CartSlice.reducer;
