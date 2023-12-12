import React from 'react'
import IconBtn from '../components/common/Iconbtn'
import { useSelector } from 'react-redux';
import {studentFeaturesAPI} from "../services/operations/studentFeaturesAPI"


const Coursedetailes = () => {
   
    const  {Token}= useSelector(state=>state.Auth);
    console.log(Token);
    const handleBuyCourse= async()=>
    {
        if(!Token)
        {
            studentFeaturesAPI();
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