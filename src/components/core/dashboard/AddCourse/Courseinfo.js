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

  const { Course, Editcourse } = useSelector((state) => state.Course);
  const [loading, setloading] = useState(false);
  const [Coursecategories, Setcoursecategories] = useState([]);

  const Getcategories = async () => {
    setloading(true);

    const Categories = await GetCategory();
    console.log(Categories);

    if (Categories.data.response.length > 0) {
      Setcoursecategories(Categories.data.response);
      console.log("Coursecategories =>", Coursecategories);
      console.log(Categories.data.response);
    }

    setloading(false);
  };

  useEffect(() => {
    // dispatch(GetCategory(Setcoursecategories));

    Getcategories();
  }, []);

  const Submithandler = async (data) => {
    // reset();
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
          <label htmlFor="Coursedescription">
            {" "}
            Course Description <sup>*</sup>{" "}
          </label>
          <textarea
            id="Coursedescription"
            placeholder="Enter Course Description"
            {...register("Coursedescription", { required: true })}
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

        {/* benefits of the course */}
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
           name="courseRequirements"
           label="Requirements/Instructions"
            register={register}
            errors={errors}
            setValue={setValue}
            getValues={getValues}
        ></Requirements>

        <div>
          <label htmlFor="Requirements">
            Requirements/Instructions <sub>*</sub>
          </label>
          <input id="Requirements" type="text"></input>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Courseinfo;
