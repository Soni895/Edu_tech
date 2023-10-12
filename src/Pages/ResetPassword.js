import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import {getpasswordresettoken} from "../services/operations/AuthAPI";

function ResetPassword() {
const dispatch=useDispatch();

// const {loading}=useSelector((state)=>state.auth);
const loading=false;
const[emailsent,setemailsent]=useState(false);
const [email,setemail]=useState("darshansoni895@gmail.com");

const handleonsubit= (event)=>
{
    event.preventDefault()
     console.log("handleonsubit called",email);
    dispatch(getpasswordresettoken(email,setemailsent));


}
  return (
    <div className=' text-white flex justify-center items-center  h-screen w-screen'>
{
    loading?(<div className='text-5xl  mb-20' >loading</div>):(<div>
    <h1>
        {
            !emailsent?("Reset Your Password"):("Check Your Email")
        }
    </h1>
    <p>
        {
            !emailsent?("Have no fear. We’ll email you instructions to reset your password.If you dont have access to your email we can try account recovery"):
            (`We have sent the reset email`)
        }
    </p>
<form  onSubmit={handleonsubit} >
{
    !emailsent &&(
        <label>
            Email address*
            <input 
            type="email"
            required
            name='email'
            value={email}
            onChange={
                (event)=>(
                setemail(event.target.value),
                console.log(email)
                )}
                placeholder='Enter your Email Address'
                className=' text-black'
            ></input>
        </label>
    )
}


<button type='submit'>
        {
            !emailsent?("Reset Your Password"):("Resend Email")
        }
    </button>

</form>

   
  <div><Link to={"/login"}> Back To Login</Link></div>

    </div>)
}


    </div>
  )
}

export default ResetPassword
