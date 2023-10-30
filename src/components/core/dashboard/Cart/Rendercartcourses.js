import React from "react";
import { useSelector } from "react-redux";
import ReactStars from "react-rating-stars-component";

function Rendercartcourses() {
//   const { Cart } = useSelector((state) => state.Cart);
const Cart=[
    {
        thumbmail:"hidarshan soni",
        courseName:"webdev",
        Category:"dats",
        rating:"3.9",

    }
]

  return (
    <div>
      {Cart.map((course, index) => {
        return (
          <div key={index}>
            <img src={course.thumbmail} />
            <div>
              <p>{course?.courseName}</p>
              <p>{course?.Category}</p>
            </div>
            <div>
              <span>{course.rating}</span>
              <ReactStars
                count={5}
                edit={false}
                isHalf={true}
                value={course.rating}
                
                size={40}
                activeColor="#ffd700"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Rendercartcourses;
