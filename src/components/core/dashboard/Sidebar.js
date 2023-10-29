import React from 'react'
// import {logout} from "../../../../services/operations/AuthAPI";
import { useDispatch, useSelector } from 'react-redux';
import  {sidebarLinks,Profilelink} from "../../../data/dashboard-links";
import Sidebarlink from './Sidebarlink';
import { useNavigate } from 'react-router';



const dispatch=useDispatch();
const navigate=useNavigate();
function Sidebar() {

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
          console.log(link.type,User?.Accouttype);
         
          if(link.type && User?.Accouttype!==link.type)
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
      
      
      ></button>
    </div>
   
 
    </div>
  )
}

export default Sidebar