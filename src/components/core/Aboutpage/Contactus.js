import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

function   Contactus() {
    const [laoding,setloading]=useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors ,isSubmitSuccessful},
      } = useForm(); 

 useEffect(()=>
 {
    if(isSubmitSuccessful)
    {
        reset(
            {
                email:"",
                firstname:"",
                lastname:"",
                message:'',
                phoneNo:"",

            }
        )
    }


 },[isSubmitSuccessful,reset])
     

const submithandler=async(data)=>
{
    console.log("form data=>",data);

}

  return (
   <div className='' >
    <form onSubmit={handleSubmit(submithandler)}>
    <div className='flex flex-col'>
    <label htmlFor='firstnam'> First Name</label>
    <input
        type="text"
        // name="firstname"
        // id="firstname"
        placeholder='Enter Your First Name'
         {...register("firstname",{required:true})}
    />
    {
        errors.firstname&&(
            <span> please enter your name</span>
        )
    }
      
      <label htmlFor='lastname'> last Name</label>
    <input
        type="text"
        name="lastname"
        id="lastname"
        placeholder='Enter Your Last Name'
        {...register("lastname")}
    />
    </div>
    <div className='flex flex-col'>
        <label htmlFor="email"> Email Address</label>
        <input
        type='email'
        name='email'
        id='email'
        placeholder='Enter Email Address'
        {...register("email",{required:true})}
        ></input>

        {
            errors.email &&(
                <span> please enter valid email</span>
            )
        }
    </div>
    <div className='flex flex-col'>
    <label htmlFor='message'> message</label>
        <textarea
        name='message'
        id='message'
        placeholder='enter message'
        {...register("message",{required:true})}
        rows={6}
        cols={5}
        ></textarea>
        {
            errors.message &&(
                <span>enter message</span>
            )
        }
    </div>
    <button type='submit'>Send message</button>

  
    </form>
   </div>
  )
}

export default Contactus