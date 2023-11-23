import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import IconBtn from '../../../common/Iconbtn';
import { setStep } from '../../../../Slices/CourseSlice';
import { useState } from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";
import NestedView from './NestedView';

function Coursebuilder() {

  const  [Editsectionname,setEditsectionname]= useState(null);
const  {Course}= useSelector((state)=>state.Course);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const dispatch= useDispatch();
  
  const submithandler=(data)=>
  {
    console.log(data);
    
  }
   
  return (

    <div>
    <h1> Course Builder</h1>

  <form onSubmit={handleSubmit(submithandler)}>
    <div>
    <label htmlFor='SectionName'> Course Builder<sup>*</sup></label>
    <input
    id='SectionName'
    type='text'
    placeholder='Enter Section Name'
    {...register("SectionName",{required:true})}>

    </input>
    {
      errors.SectionName && <span> required</span>
    }
    <div>
      <IconBtn text={Editsectionname?"Edit Section Name":"Create Section"}
      outline={true}
      customClasses={"text-white"}
      
    >
        <IoIosAddCircleOutline className='text-yellow-50 text-lg' />
    </IconBtn>
  {
    Editsectionname && (
    <button type='button'
    onClick={()=>(
      setEditsectionname(null),
      setValue("SectionName","")
    )
    }> Cancel Course Name</button>
    )
  }

    </div>
    </div>
    <div className='flex justify-end gap-10'>
    <IconBtn 
    text="Back"
    onclick={()=>dispatch(setStep(1))}
     />
      <IconBtn 
    text="Submit"
    onclick={()=>dispatch(setStep(3))} />

    </div>
  
  </form>

 { Course.CourseContent.length >0 &&(
  <NestedView/>
 )
 }
 
    </div>
  )
}

export default Coursebuilder