import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router';
import Iconbtn from '../../common/Iconbtn';

function Myprofile() {
    const {User}=useSelector((state)=>state.Profile);
    const navigate=useNavigate();
  return (
    <div className="text-white">
      <h1>My Profile</h1>
      {/* section 1 */}
      <div>
        <div>
          <img
            className=" aspect-square w-[78px] rounded-full object-cover"
            src={User?.Image}
            alt={`Profile-${User?.FirstName}`}
          ></img>
          <p>{User?.FirstName + " " + User?.LastName}</p>
          <p>
            {
                User?.Email
            }
          </p>
        </div>
        <Iconbtn
        text={"edit"}
        onclick={()=>{
            navigate("/dashboard/Setting")
        }}></Iconbtn>
      </div>

      {/* section 2 */}

      <div></div>
    </div>
  );
}

export default Myprofile