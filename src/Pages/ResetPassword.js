import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function ResetPassword() {

const {loading}=useSelector((state)=>state.auth);

const[emailsent,setemailsent]=useState(false);
const [emial,setemail]=useState("");
  return (
    <div>
{
    loading?(<div>lading</div>):(<div>
    <h1>
        {
            !emailsent?("Reset Your Password"):("Check Your Email")
        }
    </h1>
    <p>
        {
            !emailsent?("Have no fear. We’ll email you instructions to reset your password.If you dont have access to your email we can try account recovery"):
            (`We have sent the reset email to
            ${email}`)
        }
    </p>
<form onSubmit={"hi"}>
{
    !emailsent &&(
        <label>
            Email address*
            <input 
            type="email"
            required
            name='email'
            value={emial}
            onChange={(value)=>(setemail(value.target.value))}
                placeholder='Enter your Email Address'
            ></input>
        </label>
    )
}


<button>
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