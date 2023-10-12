import React, { useState } from "react";
import OTPInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VerifyEmail = () => {
  const { loading } = useSelector((state) => state.Auth);
  const dispatch=useDispatch();
  const [otp,setotp]=useState("");

  const handleonsubmit= (event)=>
  {
    event.preventDefault();
    console.log("otp=>", otp);

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
          renderInput={(props) => <input {...props} />}
          ></OTPInput>
            </div>
            <button>verify Email</button>
         
          </form>
          <div>
              <Link to={"/login"}> Back to Login</Link>
              <div>resend it</div>
            </div>
        </div>
      )}
    </div>
  );
};

export default VerifyEmail;
