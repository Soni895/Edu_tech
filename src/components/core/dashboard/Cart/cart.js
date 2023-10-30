import React from 'react'
import { useSelector } from 'react-redux'

function Cart() {
    const {TotalItems,Total}=useSelector((state)=>state.Cart);
    console.log(TotalItems,Total)
  return (

   
    <div>
        <h1>
            Your Cart
        </h1>
        <p>{TotalItems}</p>
    </div>
  )
}

export default Cart