import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import IconBtn from "../../../common/Iconbtn";
import { setEditcourse, setStep } from "../../../../Slices/CourseSlice";
import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import NestedView from "./NestedView";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import toast from "react-hot-toast";


function Coursebuilder() {
  const [Editsectionname, setEditsectionname] = useState(null);
  const { Course } = useSelector((state) => state.Course);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const submithandler = (data) => {
    console.log(data);
  };
  const GoBack=()=>
  {
    dispatch(setEditcourse(true));
    dispatch(setStep(1));

  }
  const GoNext=()=>
  {
    if(Course?.CourseContent.length===0)
    {
      toast.error("please add Section");

    }
   if(Course?.CourseContent.Some(Section=>Section.Subsection.length===0))
   {
    toast .error("add minimum one subs ection");

   }

   dispatch(setStep(3));


  }

  return (
    <div>
      <h1> Course Builder</h1>

      <form onSubmit={handleSubmit(submithandler)}>
        <div>
          <label htmlFor="SectionName">
            {" "}
            Course Builder<sup>*</sup>
          </label>
          <input
            id="SectionName"
            type="text"
            placeholder="Enter Section Name"
            {...register("SectionName", { required: true })}
          ></input>
          {errors.SectionName && <span> required</span>}
          <div>
            <IconBtn
              text={Editsectionname ? "Edit Section Name" : "Create Section"}
              outline={true}
              customClasses={"text-white"}
            >
              <IoIosAddCircleOutline className="text-yellow-50 text-lg" />
            </IconBtn>
            {Editsectionname && (
              <button
                type="button"
                onClick={() => (
                  setEditsectionname(null), setValue("SectionName", "")
                )}
              >
                {" "}
                Cancel Course Name
              </button>
            )}
          </div>
        </div>
      </form>

      {Course?.CourseContent.length > 0 && <NestedView />}
      <div className="flex justify-end gap-10">
        <IconBtn text="Back" onclick={GoBack} />
        <IconBtn text="Submit" onclick={GoNext } >
        <IoIosAddCircleOutline className="text-yellow-50 text-lg" />

        </IconBtn>
      </div>
    </div>
  );
}

export default Coursebuilder;
