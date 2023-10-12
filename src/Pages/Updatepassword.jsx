import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Updatepassword = () => {
     
    const [formdata,setformdata]=useState(
        {
            password:"",confirmpassword:""
        }
    )
   const {loading}= useSelector((state)=>state.Auth);  
   
   const [showpassword,setShowpassword]= useState(false);
   const [showconfirmpassword,setShowconfirmpassword]= useState(false);
   const [showpasswordicon,setShowpasswordicon]=useState(false);
   const handleonchange =(event)=>
   {
    setformdata((prevdata)=>{
        return {
            ...prevdata,[event.target.name]:event.target.value
        }
        
    });
    console.log(formdata.password,formdata.confirmpassword);

   }

const handleonsubmit=(event)=>{
    event.preventDefault();
    console.log(formdata);

}

  return (
    <div className='text-white'>
        {
            loading?(
                <div>loading...</div>
            ):(
                <div>
                    <h1> choose new password</h1>
                    <p>Almost done. Enter your new password and youre all set.</p>
                  <form onSubmit={handleonsubmit}> <label>
                    New Password*
                    <input 
                    
                    type={showpassword?"text":'password'} required name='password' value={formdata.password} placeholder='enter password' onChange={handleonchange} ></input>
                   </label>
                   <label>
                    Confirm New Password
                    <input type={showconfirmpassword?"text":'password'} required name='confirmpassword' value={formdata.confirmpassword} placeholder='enter confirm password' 
                    onChange={handleonchange}></input>
                   </label>
                   <button> Reset Password</button>
                   </form>
                   <div>
                    <Link to={"/login"}> back to Login</Link>
                   </div>
                </div>
            )
        }
    </div>
  )
}

export default Updatepassword