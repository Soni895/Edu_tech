import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { MdCurrencyRupee } from "react-icons/md";
import  {GetCategory}  from "../../../../services/operations/Category";
function Courseinfo() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const dispatch = useDispatch();

  const { Course, Editcourse } = useSelector((state) => state.Course);
  const [loading, setloading] = useState(false);
  const [Coursecategories, Setcoursecategories] = useState([]);

  const Getcategories = async () => {
    setloading(true);

    const Categories= await GetCategory();

       if(Categories.length>0)
     {
        Setcoursecategories(Categories.data.response);
       
     }
     console.log(Categories.data.response);
    setloading(false);
  };

  useEffect(() => {
    Getcategories();
  }, []);

  const Submithandler = async (data) => {
    console.log(data);
  };

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

        {
          <div className="text-white">
            <label htmlFor="Category">
              {" "}
              Course Categories <sup>*</sup>
            </label>
            <select
              id="Category"
              defaultValue=""
              {...register("Category", { required: true })}
            >
             <option disabled>Choose A category</option>
              {  !loading && Coursecategories.map((category, index) => {
                console.log(category);
                return (
                
                 <option key={index} value={category?._id}>{category?.Name}</option>
                 );
              })}
            </select>
            {errors.Category && <span>please select category</span>}
          </div>
        }

        <input type="submit" />
      </form>
    </div>
  );
}

export default Courseinfo;
