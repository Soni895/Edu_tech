import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router';
import IconBtn from '../../../common/Iconbtn';
import CourseTable from './CourseTable';

function MyCourses() {

    const {Token}= useSelector((state)=>state.Auth);
   const [Courses,SetCourses]=useState([]);
    const Navigate=useNavigate();

    useEffect(()=>
    {
        const  fetchCourses= async()=>
        {
            // const result= await fetchInstructorCourses(Token);
// if(result){
//     SetCourses(result)
// }

        }

    },[])

  return (
    <div className='text-white'>
    <h1>My Courses</h1>
    <IconBtn
    text={"Add Course"}
    onclick={()=>Navigate("/createcourse")}
    ></IconBtn>
    
    {
        Courses &&(
            <CourseTable Courses={Courses} SetCourses={SetCourses}/>
        )
    }
    
    
    </div>
  )
}

export default MyCourses