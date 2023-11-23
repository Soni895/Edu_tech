import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import IconBtn from "../../../common/Iconbtn";
import { SetCourse, setEditcourse, setStep } from "../../../../Slices/CourseSlice";
import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import NestedView from "./NestedView";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import toast from "react-hot-toast";


function Coursebuilder() {
  const [Editsectionname, setEditsectionname] = useState(null);
  const { Course } = useSelector((state) => state.Course);
  const [laoding,setlaoding]= useState(false);
  const {Token}= useSelector(state=>state.Auth);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const submithandler =  async (data) => {

    let result;
    setlaoding(true);

    if(Editsectionname)
    {
      //edit section api  need to be add;
      // make is pending

    }
    else{
         // craete couurse api
    }

    // update values
    if (result);
    {
      dispatch(SetCourse(result));
      setEditsectionname(null);
      setValue("Sectionname","")
    }

    setlaoding(false);

  };

  const CancelEdit=() => (
    setEditsectionname(null), setValue("SectionName", "")
  )
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
  const HandleChangeEditSection=(SectionId,SectionName)=>
  {
    if(Editsectionname===SectionId)
    {
      CancelEdit();
      return;
    }
    setEditsectionname(SectionId);
    setValue("SectionName",SectionName);

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
                onClick={CancelEdit}
              >
                {" "}
                Cancel Course Name
              </button>
            )}
          </div>
        </div>
      </form>

      {Course?.CourseContent.length > 0 && <NestedView HandleChangeEditSection={HandleChangeEditSection} />}
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
