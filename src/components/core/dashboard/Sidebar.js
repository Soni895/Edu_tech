import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import  {sidebarLinks,Profilelink} from "../../../data/dashboard-links";
import Sidebarlink from './Sidebarlink';
import { useNavigate } from 'react-router';
import {logout} from "../../../services/operations/AuthAPI";
import {VscSignOut} from  "react-icons/vsc";
import Modal from '../../common/Modal';



function Sidebar() {
  const dispatch=useDispatch();
const navigate=useNavigate();
const [confirmation,setconfirmation]=useState(null);
console.log("confirmation=>",confirmation);

    const {User,loading:profileloading}=useSelector((state)=>
    {

        return(

        state.Profile
        )
    });
const {loading:authloading}=useSelector(state=>state.Auth);

console.log("User authloading,profileloading =>",User,authloading,profileloading);
console.log("sidebarLinks,Profilelink=>",sidebarLinks,Profilelink);
if(authloading||profileloading){
    return(
      <div>
        laoding...
      </div>
    )
   }

  return (
    <div>
    <div>
           <div>
      {
        sidebarLinks.map((link)=>
        {
          
          console.log("link=>",link,"\n");
          console.log(link.type,User?.AccountType);
         
          if(link.type && User?.AccountType!==link.type)
          {
            
            return null;
          }
          return (

            <Sidebarlink key={link.id} link={link}></Sidebarlink>
          )
        })
      }
        </div>
        <div className=' mx-auto h-[2px]  mt-6 mb-6 bg-richblack-600'></div>

      <div className='flex flex-col'>
       {
        Profilelink.map((link)=> ( 
              <Sidebarlink key={link.id} link={link}></Sidebarlink>
              ))
       }
       
      </div>
      <button 
      onClick={ ()=> {
        setconfirmation(
          {
            data1:"Are you Sure ?",
            data2: " You will be logged out of your Account",
            btntext1: "Logout",
            btntext2:"Cancel",
            btnhandler1:()=>dispatch(logout(navigate("/login"))),
            btnhandler2:()=>setconfirmation(null)
          }
        )
       

      }}>
        <div className='flex gap-2'>
        <VscSignOut></VscSignOut>
        <div>Logout</div>

        </div>
      </button>
    </div>

    {
      confirmation &&(
        <Modal modaldata={confirmation}></Modal>
      )
    }
   
 
    </div>
  )
}

export default Sidebar