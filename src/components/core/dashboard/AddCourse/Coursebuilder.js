import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import IconBtn from '../../../common/Iconbtn';

function Coursebuilder() {

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
    <label htmlFor='Coursebuilder'> Course Builder<sup>*</sup></label>
    <input
    id='Course Builder'
    type='text'
    placeholder='Enter Course Name'
    {...register("Coursebuilder",{required:true})}>

    </input>
    {
      errors.Coursebuilder && <span> required</span>
    }
    <div className='flex justify-end gap-10'>
    <IconBtn 
    text="Back"
     />
      <IconBtn 
    text="Submit" />

    </div>
  
  </form>


    </div>
  )
}

export default Coursebuilder