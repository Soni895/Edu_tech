import React from "react";
import { useDispatch,useSelector } from "react-redux";
import ReactStars from "react-rating-stars-component";
import { RiDeleteBinLine } from "react-icons/ri";
import {removeitem} from "../../../../Slices/CartSlice"

function Rendercartcourses() {
    const dispatch=useDispatch();

  //   const { Cart } = useSelector((state) => state.Cart);
  const Cart = [
    {
      thumbmail: "hidarshan soni",
      courseName: "webdev",
      Category: "dats",
      rating: 3.9,
      RagingAndReviewCount: 5,
    },
  ];

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
                value={course?.rating}
                size={40}
                activeColor="#ffd700"
              />
              <span> {course?.RagingAndReviewCount.length}</span>
            </div>
            <div>
              <button className="flex gap-5" onClick={()=>
              {
                dispatch(removeitem())
              }}>
                <RiDeleteBinLine />
                <span>romove</span>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Rendercartcourses;
