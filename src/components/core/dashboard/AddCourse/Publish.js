import React from 'react'
import { useForm } from 'react-hook-form';

function Publish() {

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();
  return (
    <div>Publish</div>
  )
}

export default Publish