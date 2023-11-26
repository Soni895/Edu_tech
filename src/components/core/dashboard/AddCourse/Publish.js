import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Resetcoursestate, setStep } from "../../../../Slices/CourseSlice";

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

useEffect(()=>
{

  // if(Course?.status===Course_status.Published)
  // {
  //   setValue("Public",true);
  // }
},[])

function GoToCourses()
{
  dispatch(Resetcoursestate());

  // navigat to coursezs

}
 async function   HandleCoursePublish ()
{
  // if(Course?.status===Course_status.Published && getValues("Public")===true
  // ||(Course.status===COURSE_stattus.draft && getValues("Public")===false))
  // {
  //   //no need to update form
  //   // no need to make api call

  //   GoToCourses();
  //   return;

  // }

  // if form is updated
  // const formData= new FormData();
  // formData.append("CourseId",Course?._id);
  // const CourseStatus= getValues ("Publice")?Course_status.Published:CourseSatus.Draft
  // formData.append("Sattus",CourseStatus);


  // api call
setloading(true)

// const result= await

// if(result)
// {
//   GoToCourses();
// }

setloading(false);


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
