import React from 'react'
// import {logout} from "../../../../services/operations/AuthAPI";
import { useSelector } from 'react-redux';
import  {sidebarLinks} from "../../../data/dashboard-links";
import Sidebarlink from './Sidebarlink';

function Sidebar() {

    const {user,loading:profileloading}=useSelector((state)=>
    {

        return(

        state.Profile
        )
    })
const {loading:authloading}=useSelector(state=>state.Auth);

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
        sidebarLinks.map((link,index)=>
        {
          if(link.type   && user.accouttype!==link.type)
          {
            return null;
          }
          return (
            <Sidebarlink></Sidebarlink>
          )
        })
      }
    </div>


    </div>
  )
}

export default Sidebar