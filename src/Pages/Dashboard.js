import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom';
import Sidebar from "../components/core/dashboard/Sidebar"

const Dashboard = () => {

   const {loading:authloading}=useSelector((state)=>state.Auth);
   const  {loading:profileloading}=useSelector((state)=>state.Profile);

   console.log(authloading,profileloading);

   if(profileloading||profileloading){
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
