import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

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

  const submithandler = (data) => {
    console.log(data);
  };

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
        <button>submit</button>
      </form>
    </div>
  );
}

export default Publish;
