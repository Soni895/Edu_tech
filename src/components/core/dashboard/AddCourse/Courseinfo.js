import React from 'react'

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
      const [laoding,setloading]=usestate(false);
      const [Coursecategories,setCoursecategories]=usestate([]);
      


    
      const Submithandler=(data)=>
      {
        console.log(data);
      }

    
  return (
    <div>

  <form onSubmit={handleSubmit(Submithandler)}>
      <input {...register('firstName')} />
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