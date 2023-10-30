import React from 'react'
import {  useSelector } from 'react-redux'
import Rendercartcourses from './Rendercartcourses';
import Rendertotalamout from './Rendertotalamout';

function Cart() {
    
    const {Totalitems,Total}=useSelector((state)=>state.Cart);
    console.log(Totalitems,Total)
  return (

   
    <div>
        <h1>
            Your Cart
        </h1>
        <p>{Totalitems} in your cart</p>
        {
           ! Total>0 ?(
                <div>
                    <Rendercartcourses/>
                    <Rendertotalamout/>
                </div>
            ):(<div> Your Cart is Empty</div>)

        }
    </div>
  )
}

export default Cart