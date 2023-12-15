import React from 'react'
import IconBtn from '../components/common/Iconbtn'
import { useDispatch, useSelector } from 'react-redux';
import {BuyCourse} from "../services/operations/studentFeaturesAPI"
import { useNavigate, useParams } from 'react-router';


const Coursedetailes = () => {
   
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const  {Token}= useSelector(state=>state.Auth);
    const {User}=useSelector(state=>state.Profile);
    console.log(Token);
    const CourseId=useParams();
    console.log(CourseId);
    const handleBuyCourse= async()=>
    {
        if(Token)
        {
            BuyCourse(Token,navigate,dispatch,User,[CourseId]);
            console.log("course buy successful");

            return;
        }
      
    }
  return (
    <div className='text-white flex justify-center items-center text-2xl'>


    <IconBtn onclick={handleBuyCourse} >Buy Now</IconBtn>
    </div>
  )
}

export default Coursedetailes