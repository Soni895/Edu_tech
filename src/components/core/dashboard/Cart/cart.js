import React from 'react'
import { useSelector } from 'react-redux'

function Cart() {
    const {Totalitems,Total}=useSelector((state)=>state.Cart);
    console.log(Totalitems,Total)
  return (

   
    <div>
        <h1>
            Your Cart
        </h1>
        <p>{Totalitems}</p>
    </div>
  )
}

export default Cart