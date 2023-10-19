import React from 'react'
import {sidebarLinks} from "../../../../data/dashboard-links";
import {logout} from "../../../../services/operations/AuthAPI";
import { useSelector } from 'react-redux';

function Sidebar() {

    const {user,loading:profileloading}=useSelector((state)=>
    {
        return(
            
            state.Profile
        )
    })
  return (
    <div>


    </div>
  )
}

export default Sidebar