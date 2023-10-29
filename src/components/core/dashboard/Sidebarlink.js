
import React from 'react'
import * as icons from "react-icons/vsc";
import { useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';

function Sidebarlink({link}) {
         console.log(link);
        const icon= link.icon;
        console.log(icon);
    const location= useLocation();
    const dispatch= useDispatch();

    const matchroute=(path)=>
    {
        console.log(path);
        console.log(location.pathname);
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
            className={`relative ${matchroute(link.path)?"bg-yellow-400":" bg-transparent"}`}
        >
        <span className={`absolute top-0 left-0  h-full  w-[0..2rem] ${matchroute(link.path)?" opacity-100":" opacity-0"  }`}>
        </span>
        {link.name}
        </NavLink>
    </div>
  )
}

export default Sidebarlink