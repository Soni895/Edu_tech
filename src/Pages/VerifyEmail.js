import React, { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Sendotp,Signup } from "../services/operations/AuthAPI";
const VerifyEmail = () => {
  const { Signupdata, loading } = useSelector((state) => state.Auth);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [otp,setotp]=useState("");

  console.log("Signupdata=>",Signupdata);
  
  useEffect(()=>
  {
    if(!Signupdata)
    {
      console.log("Data is not found");
        navigate("/signup");
        
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
      } = Signupdata;
  
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
          <form onSubmit={handleonsubmit}>
          <div>
          <OTPInput
          value={otp}
          onChange={(value)=>
          {
            console.log(value);
            setotp(value);

          }}
          numInputs={6}
          renderInput={(props) => <input {...props} placeholder="-" renderseparator={<span>"-</span>}/>}
          ></OTPInput>
            </div>
            <button>verify Email</button>
          </form>
          <div>
              <Link to={"/login"}> Back to Login</Link>
              <button onClick={()=>
              {
                dispatch(Sendotp(Signupdata.email,navigate))
              }}>resend it</button>
            </div>
        </div>
      )}
    </div>
  );
};

export default VerifyEmail;
