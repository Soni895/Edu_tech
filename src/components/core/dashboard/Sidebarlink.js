
import React from 'react'
import * as Icons from "react-icons/vsc";
import { useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';

function Sidebarlink({link}) {
         console.log(link);
        const Icon= Icons[link.icon];
        console.log(Icon);
    const location= useLocation();
    const dispatch= useDispatch();

    const matchroute=(path)=>
    {
        console.log("path=>",path);
        console.log("location.pathname=>",location.pathname);
         return location.pathname === path;
    }

  return (
    <div>
        <NavLink
            to={link.path}
            onClick={()=>
            {
                console.log("hi darshan soni");
            }}
            className={`relative ${matchroute(link.path)?" text-yellow-5":" bg-transparent"}`}
        >
        
        <span className={`absolute top-0 left-0  h-full  w-[0..2rem] ${matchroute(link.path)?" opacity-100":" opacity-0"  }`}>
        </span>
       <div className='flex items-center gap-2'>
       <Icon></Icon>
       {link.name}
       </div>
       
        </NavLink>
    </div>
  )
}

export default Sidebarlink