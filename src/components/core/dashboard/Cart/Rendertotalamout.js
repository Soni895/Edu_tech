
import React from 'react'
import { useSelector } from 'react-redux'
import Iconbtn from '../../../common/Iconbtn';

function Rendertotalamout() {
    const {Total,Cart}= useSelector((state)=>state.Cart);
    
    const handlebycourse=()=>
    {
        const course= Cart.map((course)=>course._id);
         console.log("all courses=>",course);

         // api for buy course-> payment get way

    }

  return (
    <div>

        <p>Total:</p>
        <p>Rs {Total}</p>
        <Iconbtn
            text={"Buy Now"}
            onclick={handlebycourse}

        />
    </div>
  )
}

export default Rendertotalamout