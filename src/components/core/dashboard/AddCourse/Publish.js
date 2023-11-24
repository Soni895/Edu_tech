import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

function Publish() {

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();
  const dispatch= useDispatch();
  const [laoding,setlaoding]=useState();
  const {Course}= useselector((state)=>state.Course);
  const {Token}= useselector((state)=>state.Auth)

  
  return (
    <div>Publish</div>
  )
}

export default Publish