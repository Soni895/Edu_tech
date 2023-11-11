import React from "react";
import { FaCheck } from "react-icons/fa";
import { useSelector } from "react-redux";
import Publish from "./Publish";
import Coursebuilder from "./Coursebuilder";
import Courseinfo from "./Courseinfo";


function Rendersteps() {
  const steps = [
    {
      id: 1,
      title: "Course Informatrion",
    },
    {
      id: 2,
      title: "Course Builder",
    },
    {
      id: 3,
      title: "Publish",
    },
  ];
  const { Step } = useSelector((state) => state.Course);
  console.log(Step);
  return (
    <div>
      <div className="flex justify-between">
        {steps.map((item) => (
          <div>
            <div
              key={item.id}
              className={`${
                Step === item.id
                  ? " bg-yellow-900  border-yellow-50 text-yellow-50 "
                  : " border-richblack-700 bg-richblack-800 text-richblack-300"
              }`}
            >
              {Step > item.id ? <FaCheck /> : item.id}
            </div>
            <div>
              {
                item.title
              }
            </div>
          </div>
        ))}
      </div>

      {
        Step===1 &&(
          <Courseinfo></Courseinfo>
        )
        
      }
      {
        Step===2 &&(
          <Coursebuilder/>)
      }
      {
        Step===3 &&<Publish></Publish>
      }
    </div>
  );
}

export default Rendersteps;
