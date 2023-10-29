import React from 'react'
// import {logout} from "../../../../services/operations/AuthAPI";
import { useSelector } from 'react-redux';
import  {sidebarLinks} from "../../../data/dashboard-links";
import Sidebarlink from './Sidebarlink';

function Sidebar() {

    const {User,loading:profileloading}=useSelector((state)=>
    {

        return(

        state.Profile
        )
    });
const {loading:authloading}=useSelector(state=>state.Auth);

console.log("User authloading,profileloading =>",User,authloading,profileloading);
console.log("sidebarLinks=>",sidebarLinks);
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
      {
        sidebarLinks.map((link)=>
        {
          
          console.log("link=>",link,"\n");
          console.log(link.type,User?.Accouttype);
          if(!link.type && User?.Accouttype!==link.type)
          {
            return null;
          }
          return (
            <Sidebarlink key={link.id} link={link}></Sidebarlink>
          )
        })
      }
    </div>


    </div>
  )
}

export default Sidebar