import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { RxDropdownMenu } from "react-icons/rx";


function NestedView({HandleChangeEditSection}) {

    const {Course}=useSelector((state)=>state.Course);
    const {Token}=useSelector((state)=>state.Auth);
    const dispatch= useDispatch(); 

    const [addsubsection,setsubsection]=useState(null);
    const [viewsubsection,setviewsubsection]=useState(null);
    const [editsubsection,seteditsubsection]=useState(null);
    const [confirmationmodaal,setconfirmationmodal]=useState(null);
  return (
    <div>
        <div>
        {
            Course?.CourseContent.map((section,index)=>(
                <details key={section?._id} open>
                <summary>
                <RxDropdownMenu />
                <p>{section.SectionName}</p>



                </summary>

                </details>
            ))
        }

        </div>
    </div>
  )
}

export default NestedView