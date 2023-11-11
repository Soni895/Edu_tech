import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
function Courseinfo() {
    const {
        register,
        handleSubmit,
        formState: { errors,isSubmitSuccessful },
      } = useForm();

      const dispatch=useDispatch();

      const {Course,Editcourse}=useSelector(state=>state.Course);
      const [laoding,setloading]=useState(false);
      const [Coursecategories,setCoursecategories]=useState([]);

      const Getcategories= async()=>
      {
         setloading(true);

       // const Categories= await dispatch(getcategories())
        //   need to call api

    //    if(Categories.length>0)
      //  {
        //    setCoursecategories(Categories);
      //  }
        setloading(false);

      }

    useEffect((()=>
    {
        // Getcategories();

         
 
    }),[]) 
    
      const Submithandler= async (data)=>
      {
        console.log(data);
      }

    
  return (
    <div>

  <form onSubmit={handleSubmit(Submithandler)}>
     <div>
        <label htmlFor='Title'> Course title <sup>*</sup> </label>
        <input id='Title'
        placeholder='Enter Course Title' 
        {...register('Title',{required:true})} />
        {
            errors.Title &&<span> Course Title is required </span>
        }
     </div>
     <div></div>
       
      <input {...register('lastName', { required: true })} />
      {errors.lastName && <p>Last name is required.</p>}
      <input {...register('age', { pattern: /\d+/ })} />
      {errors.age && <p>Please enter number for age.</p>}
      <input type="submit" />
    </form>

    </div>
  )
}

export default Courseinfo