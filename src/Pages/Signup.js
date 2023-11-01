import React from 'react'
import signupImg from "../assets/Logo/signup.png"
import Template from './Template'
import { useSelector } from 'react-redux'

const Signup = () => {

  const {loading}=useSelector(state=>state.Auth);
  
  if(loading)
  {
    return (
      <div className='text-white'>laoding....</div>
    )

  }
  return (
    <Template
      title="Join the millions learning to code with StudyNotion for free"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={signupImg}
      formtype="signup"
    
    />
  )
}

export default Signup
