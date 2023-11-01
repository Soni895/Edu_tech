import React from 'react'
import Template from './Template'
import loginImg from "../assets/Logo/login.png"

const Login = () => {
  return (
    <Template
      title="Welcome Back"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={loginImg}
      formtype="login"
      
    />
  )
}

export default Login
