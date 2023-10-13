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
     

  return (
    <div>

    </div>
  )
}

export default Contactus