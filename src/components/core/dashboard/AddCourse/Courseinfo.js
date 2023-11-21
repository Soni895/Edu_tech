import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { MdCurrencyRupee } from "react-icons/md";
import { GetCategory } from "../../../../services/operations/CourseDetailesAPI";
import Mediaupload from "./Mediaupload";
import Requirements from "./Requirements";
import { BsCheckLg } from "react-icons/bs";
import IconBtn from "../../../common/Iconbtn";
import { setStep } from "../../../../Slices/CourseSlice";
function Courseinfo() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const dispatch = useDispatch();

  const { Course, Editcourse, } = useSelector((state) => state.Course);
  const [loading, setloading] = useState(false);
  const [Coursecategories, SetCoursecategories] = useState([]);

  const Getcategories = async () => {
    setloading(true);

    const Categories = await GetCategory();
    console.log(Categories);

    if (Categories.data.response.length > 0) {
      SetCoursecategories(Categories.data.response);
      console.log("Coursecategories =>", Coursecategories);
      console.log(Categories.data.response);
    }

    setloading(false);
  };

  useEffect(() => {
    // dispatch(GetCategory(SetCoursecategories));

    Getcategories();

  //   if(EditCourse) {
  //     setValue("Title", Course.CourseName);
  //     setValue("CourseDescription", Course.CourseDescription);
  //     setValue("CoursePrice", Course.price);
  //     setValue("CourseTags", Course.tag);
  //     setValue("CourseBenefits", Course.whatYouWillLearn);
  //     setValue("CourseCategory", Course.category);
  //     setValue("CourseRequirements", Course.instructions);
  //     setValue("CourseImage", Course.thumbnail);
  // }
  }, []);


  const IsFormUpdated = () => {
    const currentValues = getValues();
    if(currentValues.eTitle !== Course.CourseName ||
        currentValues.ShortDesc !== Course.CourseDescription ||
        currentValues.Price !== Course.price ||
        currentValues.Title !== Course.CourseName ||
        //currentValues.CourseTags.toString() !== Course.tag.toString() ||
        currentValues.Benefits !== Course.whatYouWillLearn ||
        currentValues.Category._id !== Course.category._id ||
        //currentValues.CourseImage !== Course.thumbnail ||
        currentValues.Requirements.toString() !== Course.instructions.toString() )
        return true;
    else
        return false;
}

  const Submithandler = async (data) => {
    reset();
  //   if(Editcourse) {
  //     if(IsFormUpdated()) {
  //         const currentValues = getValues();
  //     const formData = new FormData();

  //     formData.append("courseId", Course._id);
  //     if(currentValues.courseTitle !== Course.courseName) {
  //         formData.append("courseName", data.courseTitle);
  //     }

  //     if(currentValues.courseShortDesc !== Course.courseDescription) {
  //         formData.append("courseDescription", data.courseShortDesc);
  //     }

  //     if(currentValues.coursePrice !== Course.price) {
  //         formData.append("price", data.coursePrice);
  //     }

  //     if(currentValues.courseBenefits !== Course.whatYouWillLearn) {
  //         formData.append("whatYouWillLearn", data.courseBenefits);
  //     }

  //     if(currentValues.courseCategory._id !== Course.category._id) {
  //         formData.append("category", data.courseCategory);
  //     }

  //     if(currentValues.courseRequirements.toString() !== Course.instructions.toString()) {
  //         formData.append("instructions", JSON.stringify(data.courseRequirements));
  //     }

  //     setloading(true);
  //     const result = await editCourseDetails(formData, token);
  //     setloading(false);
  //     if(result) {
  //         setStep(2);
  //         dispatch(setCourse(result));
  //     }
  //     } 
  //     else {
  //         toast.error("NO Changes made so far");
  //     }
  //     console.log("PRINTING FORMDATA", formData);
  //     console.log("PRINTING result", result);

  //     return;
  // }

  // //create a new Course
  // const formData = new FormData();
  // formData.append("courseName", data.courseTitle);
  // formData.append("courseDescription", data.courseShortDesc);
  // formData.append("price", data.coursePrice);
  // formData.append("whatYouWillLearn", data.courseBenefits);
  // formData.append("category", data.courseCategory);
  // formData.append("instructions", JSON.stringify(data.courseRequirements));
  // formData.append("status", COURSE_STATUS.DRAFT);

  // setLoading(true);
  // console.log("BEFORE add Course API call");
  // console.log("PRINTING FORMDATA", formData);
  // const result = await addCourseDetails(formData,token);
  // if(result) {
  //     setStep(2);
  //     dispatch(setCourse(result));
  // }
  // setLoading(false);
  // console.log("PRINTING FORMDATA", formData);
  // console.log("PRINTING result", result);
    console.log(data);
  };
  console.log(Coursecategories);
  return (
    <div>
      <form onSubmit={handleSubmit(Submithandler)}>
        <div>
          <label htmlFor="Title">
            {" "}
            Course title <sup>*</sup>{" "}
          </label>
          <input
            id="Title"
            placeholder="Enter Course Title"
            {...register("Title", { required: true })}
         
          />
          {errors.Title && <span> Course Title is required </span>}
        </div>
        <div>
          <label htmlFor="CourseDescription">
            {" "}
            Course Description <sup>*</sup>{" "}
          </label>
          <textarea
            id="CourseDescription"
            placeholder="Enter Course Description"
            {...register("CourseDescription", { required: true })}
          />
          {errors.Coursedescription && (
            <span> Course Description is required</span>
          )}
        </div>
        <div className="relative">
          <label htmlFor="Price">
            {" "}
            Course Price <sup>*</sup>{" "}
          </label>
          <input
            className=" bg-black "
            id="Price"
            placeholder="Enter Course Price"
            {...register("Price", {
              required: true,
              valueAsNumber: true,
            })}
          />
          <MdCurrencyRupee className="absolute left-[110px]" />
          {errors.Price && <span> Course Price is required </span>}
        </div>

        <div className="">
          <label htmlFor="Category">
            {" "}
            Course Categories <sup>*</sup>
          </label>
          <select
            className="text-black"
            id="Category"
            defaultValue={""}
            {...register("Category", { required: true })}
          >
            <option value="" disabled>
              Choose A category
            </option>

            {!loading &&
              Coursecategories.map((category, index) => {
                return (
                  <option key={index} value={category?._id}>
                    {category?.Name}
                  </option>
                );
              })}
          </select>
          {errors.Category && <span>please select category</span>}
        </div>

        {/* home work craete a coustom input for tag  */}

        {/* thumbmail upload  homework */}
        <Mediaupload />

        {/* benefits of the Course */}
        <div>
          <label htmlFor="Benefits">
            benefits Of The Course <sup>*</sup>
          </label>
          <textarea
            id="Benefits"
            placeholder="Enter Benefits of Course"
            {...register("Benefits", { required: true })}
          />
          {errors.Benefits && <span> required</span>}
        </div>

        {/* requirements field home work */}
 
        <Requirements
           name="CourseRequirements"
           label="Requirements/Instructions"
            register={register}
            errors={errors}
            setValue={setValue}
            getValues={getValues}
        ></Requirements>
  <div>
            {
                Editcourse && (
                    <button
                    onClick={() => dispatch(setStep(2))}
                    className='flex items-center gap-x-2 bg-richblack-300'
                    >
                        Continue Without Saving
                    </button>
                )
            }

            <IconBtn
                text={!Editcourse ? "Next" : "Save Changes"}
                />
        </div>
      </form>
    </div>
  );
}

export default Courseinfo;
