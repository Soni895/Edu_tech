import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function   Contactus() {
    const [laoding,setloading]=useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

  return (
    <div>


    </div>
  )
}

export default Contactus