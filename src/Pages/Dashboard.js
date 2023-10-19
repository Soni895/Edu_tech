import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom';

const Dashboard = () => {

   const {laoding:authloading}=useSelector((state)=>state.Auth);
   const  {laoding:profilelaoding}=useSelector((state)=>state.profile);
   if(authloading||profilelaoding){
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
