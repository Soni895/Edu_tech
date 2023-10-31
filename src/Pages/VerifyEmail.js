import React, { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Sendotp,Signup } from "../services/operations/AuthAPI";
const VerifyEmail = () => {
  const { signupdata, loading } = useSelector((state) => state.Auth);
  const dispatch=useDispatch();
  const [otp,setotp]=useState("");
  const navigate=useNavigate();

  useEffect(()=>
  {
    if(!signupdata)
    {
        // navigate("/signup");
    }

  },[]);

  const handleonsubmit= (event)=>
  {
    event.preventDefault();
    console.log("otp=>", otp);
    const {
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      } = signupdata;
  
    dispatch(Signup( accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,otp,navigate))

  }
  return (
    <div className="text-white">
      {loading ? (
        <div>laoding...</div>
      ) : (
        <div>
          <h1> verify Email</h1>
          <p>A verification code has been sent to you. Enter the code below</p>
          <form  onSubmit={handleonsubmit}>
          <div>
          <OTPInput
          value={otp}
          onChange={(e)=>
          {
            setotp(e.target.value);

          }}
          numInputs={6}
          renderInput={(props) => <input {...props} placeholder="-" renderSeparator={<span>"-</span>}/>}
          ></OTPInput>
            </div>
            <button>verify Email</button>
         
          </form>
          <div>
              <Link to={"/login"}> Back to Login</Link>
              <button onClick={()=>
              {
                dispatch(Sendotp(signupdata.email))
              }}>resend it</button>
            </div>
        </div>
      )}
    </div>
  );
};

export default VerifyEmail;
