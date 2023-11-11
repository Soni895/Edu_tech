import { createSlice } from "@reduxjs/toolkit";
import { LoaderIcon, toast } from "react-hot-toast";


const initialState = {
  Totalitems: localStorage.getItem("totalItems")
    ? JSON.parse(localStorage.getItem("totalItems"))
    : 0,
  Total: localStorage.getItem("Total")
    ? JSON.parse(localStorage.getItem("Total"))
    : 0,
  Cart: localStorage.getItem("Cart")
    ? JSON.parse(localStorage.getItem("Cart"))
    : [],
};
const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
  
    //    add to cart
    //    remove to cart
    //    reset cart

    Addtocart: (state, value) => {
      const Course = value.payload;
      const index = state.Cart.findIndex((item) => item._id === Course._id);

      // printing the data
      console.log("value=>", value);
      console.log("Course=>", Course);
      console.log("state=>", state);
      console.log("index=>", index);
      if (index >= 0) {
        // If the course is already in the cart, do not modify the quantity
        toast.error("Course already in cart");
        return;
      }

      // If the course is not in the cart, add it to the cart
      state.Cart.push(Course);
      // Update the total quantity and price
      state.Totalitems++;
      state.Total += Course.Price;

      // Update to localstorage
      localStorage.setItem("Cart", JSON.stringify(state.Cart));
      localStorage.setItem("Total", JSON.stringify(state.Total));
      localStorage.setItem("Totalitems", JSON.stringify(state.Totalitems));
      // show toast
      toast.success("Course added to cart");
    },
    Removetocart: (state, value) => {
      const CourseId = value.payload;
      const index = state.Cart.findIndex((item) => item._id === CourseId);

      // printing the data
      console.log("value=>", value);
      console.log("Course=>", CourseId);
      console.log("state=>", state);
      console.log("index=>", index);
      if (index >= 0) {
        // Update the total quantity and price
        state.Totalitems--;
        state.Total -= state.Cart[index].Price;
        state.Cart.splice(index, 1);
        // Update to localstorage
        localStorage.setItem("Cart", JSON.stringify(state.Cart));
        localStorage.setItem("Total", JSON.stringify(state.Total));
        localStorage.setItem("Totalitems", JSON.stringify(state.Totalitems));
        // show toast
        toast.success("Course removed from cart");
      }
    },

    // complete

    Resetcart: (state) => {
      state.Cart = [];
      state.Total = 0;
      state.Totalitems = 0;

      // Update to localstorage
      localStorage.removeItem("Cart");
      localStorage.removeItem("Total");
      localStorage.removeItem("Totalitems");
    },
  },
});
export const { Addtocart,Removetocart, Resetcart  } = CartSlice.actions;
export default CartSlice.reducer;
