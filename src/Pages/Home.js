import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import HighlightText from '../Components/Core/Homepage/HighlightText';
import Button from '../Components/Core/Homepage/Button';
import banner from "../assets/Images/banner.mp4";
import CodeBlocks from '../Components/Core/Homepage/CodeBlocks';
function Home() {
  return (
    <div>
  {/* //  section 1 */}

  <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center 
      text-white justify-between'>
   <NavLink to={"/signup"}>
   <div className=' group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200
            transition-all duration-200 hover:scale-95 w-fit'>
                <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px]
                transition-all duration-200 group-hover:bg-richblack-900'>
<p>
    Become an Instructor
  </p>
  <BsArrowRightCircleFill/>
</div>

</div>
   </NavLink>
   <div className=' text-center font-semibold text-4xl mt-8'>
   Empower Your Future With <HighlightText Text='Coding Skills'/>
   </div>
   <div className='w-[90%] text-center mt-2 text-lg font-semibold text-richblack-300 '>With our online coding courses, 
   you can learn at your own pace, from anywhere in the world, and get 
   access to a wealth of resources, including hands-on projects, quizzes, and personalized
    feedback from instructors. </div>
  </div> 

  {/* button */}
  <div className='flex flex-row gap-5 mt-8 items-center justify-center text-white '>
    <Button active={true} linkto={"/signup"} >Learn More</Button>
    <Button active={false} linkto={"/signup"}>Book a Demo</Button>
  </div>

  {/* video */}
  <div className='bg-white relative w-[80%] flex justify-center m-auto  mt-16  '>
   <div className=' bottom-3 left-4'>
 <video    muted autoPlay loop>
 <source src={banner} type="video/mp4"/>

</video>
 </div>
 </div>
  {/* Code Section 1 */}
  <div>
            <CodeBlocks 
                position={"lg:flex-row"}
                heading={
                    <div className='text-4xl font-semibold'>
                        Unlock Your
                        <HighlightText text={"coding potential"}/>
                        with our online courses
                    </div>
                }
                subheading = {
                    "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                }
                ctabtn1={
                    {
                        btnText: "try it yourself",
                        linkto: "/signup",
                        active: true,
                    }
                }
                ctabtn2={
                    {
                        btnText: "learn more",
                        linkto: "/login",
                        active: false,
                    }
                }

                codeblock={`<<!DOCTYPE html>\n<html>\nhead><title>Example</title><linkrel="stylesheet"href="styles.css">\n/head>\n`}
                codeColor={"text-yellow-25"}
            />
        </div>

                {/* Code Section 2 */}
        <div>
            <CodeBlocks 
                position={"lg:flex-row-reverse"}
                heading={
                    <div className='text-4xl font-semibold'>
                        Unlock Your
                        <HighlightText text={"coding potential"}/>
                        with our online courses
                    </div>
                }
                subheading = {
                    "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                }
                ctabtn1={
                    {
                        btnText: "try it yourself",
                        linkto: "/signup",
                        active: true,
                    }
                }
                ctabtn2={
                    {
                        btnText: "learn more",
                        linkto: "/login",
                        active: false,
                    }
                }

                codeblock={`<<!DOCTYPE html>\n<html>\nhead><title>Example</title><linkrel="stylesheet"href="styles.css">\n/head>\n`}
                codeColor={"text-yellow-25"}
            />
        </div>
 
    {/* // section  2 */}


  {/* // section  3 */}


     
  {/* // footer */}
  </div>
  );
}

export default Home