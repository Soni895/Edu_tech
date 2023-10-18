import React, { useEffect, useState } from 'react';
import { set, useForm } from 'react-hook-form';
import { ApiConnector } from '../../../services/apiconnector';
import {contactusEndpoint} from "../../../services/apis"

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
    try {
       setloading(true);
       const response= await ApiConnector("post",contactusEndpoint.CONTACT_US_API,data);

       console.log(response);
      
    
        
    } catch (error) {
        console.log("error occur=>",error.message);
        
    }
    setloading(false);

}

  return (
   <div className=' text-black' >
    <form onSubmit={handleSubmit(submithandler)}>
    <div className='flex flex-col'>
    <label htmlFor='firstname' className='text-white'> First Name</label>
    <input
        type="text"
        name="firstname"
        id="firstname"
        placeholder='Enter Your First Name'
         {...register("Firstname",{required:true})}
    />
    {
        errors.firstname&&(
            <span className='text-white'> please enter your name</span>
        )
    }
      
      <label  className='text-white' htmlFor='lastname'> last Name</label>
    <input
        type="text"
        name="lastname"
        id="lastname"
        placeholder='Enter Your Last Name'
        {...register("lastname")}
    />
    </div>
    <div className='flex flex-col'>
        <label  className='text-white' htmlFor="email"> Email Address</label>
        <input
        type='email'
        name='email'
        id='email'
        placeholder='Enter Email Address'
        {...register("email",{required:true})}
        ></input>

        {
            errors.email &&(
                <span className='text-white'> please enter valid email</span>
            )
        }
    </div>
    <div className=' text-white flex flex-col'>
       <label className=' '> Contact Number</label>
       <input
            type='number'
            name='number'
            id='number'
            {...register("number",{required:true})}
        />
    </div>

    <div className='flex flex-col'>
    <label className='text-white' htmlFor='message'> message</label>
        <textarea
        name='message'
        id='message'
        placeholder='enter message'
        {...register("message",{required:true})}
        rows={7}
        cols={6}
        
        ></textarea>
        {
            errors.message &&(
                <span className='text-white'>enter message</span>
            )
        }
    </div>
    <button type='submit' className='text-white'>Send message</button>

  
    </form>
   </div>
  )
}

export default Contactus