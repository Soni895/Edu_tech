import React from 'react'
import { NavLink } from 'react-router-dom'

function Button({children,active,linkto}) {
  return (
    <NavLink  to={linkto} className={`text-center text-[13px] px-6 py-3 rounded-md font-bold ${active? "bg-yellow-50 text-black":"bg-richblack-800"} 
    hover:scale-95 transition-all duration all border-r-2 border-b-2 border-richblack-500`}>{children}</NavLink>
  )
}

export default Button