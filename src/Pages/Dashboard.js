import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom';
import Sidebar from "../components/core/dashboard/Sidebar"

const Dashboard = () => {

   const {laoding:authloading}=useSelector((state)=>state.Auth);
   const  {laoding:profileloading}=useSelector((state)=>state.profile);
   if(authloading||profileloading){
    return(
      <div>
        laoding...
      </div>
    )
   }
   
  return (

    <div className='flex justify-center items-center text-white text-3xl h-full'>
  
   <Sidebar></Sidebar>
   <div>
    <Outlet/>
   </div>



    </div>
  )
}

export default Dashboard
