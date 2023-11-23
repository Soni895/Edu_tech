import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

function NestedView({HandleChangeEditSection}) {

    const {Course}=useSelector((state)=>state.Course);
    const {Token}=useSelector((state)=>state.Auth);
    const dispatch= useDispatch(); 

    const [addsubsection,setsubsection]=useState(null);
    const [viewsubsection,setviewsubsection]=useState(null);
    const [editsubsection,seteditsubsection]=useState(null);
  return (
    <div>NestedView</div>
  )
}

export default NestedView