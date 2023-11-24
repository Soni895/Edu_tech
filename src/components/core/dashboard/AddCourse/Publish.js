import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setStep } from "../../../../Slices/CourseSlice";

function Publish() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const [loading, setloading] = useState();
  const { Course } = useSelector((state) => state.Course);
  const { Token } = useSelector((state) => state.Auth);

function HandleCoursePublish()
{
  
}
  const submithandler = (data) => {
    HandleCoursePublish();
  };
  const Goback= ()=>
  {
    dispatch(setStep(2));
  }

  return (
    <div>
      <p> Publish Course</p>
      <form onSubmit={handleSubmit(submithandler)}>
        <div>
          <label htmlFor="Public"> make this Course As public</label>
          <input
            id="Public"
            type="checkbox"
            {...register("Public", { required: true })}
          ></input>
          {errors.Public && <span>please theck the box</span>}
        </div>
        <div className="flex gap-10">
        <button type="button" disabled={loading} onClick={Goback}>Back</button>
        <button disabled={loading}>save changes</button>

        </div>
       
      </form>
    </div>
  );
}

export default Publish;
