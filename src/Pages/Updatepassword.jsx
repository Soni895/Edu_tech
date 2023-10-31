import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ResetPassword } from '../services/operations/AuthAPI';
import { AiFillEyeInvisible,AiFillEye } from 'react-icons/ai';
const Updatepassword = () => {
     
    const dispatch = useDispatch();
    const location= useLocation();
    const navigate=useNavigate();
    
    console.log("location.pathname=>",location.pathname);
const Token= location.pathname.split('/').at(-1);
     console.log("Token=>",Token);
    const [formdata,setformdata]=useState(
        {
            ConfirmPassword:"",Password:""
        }
    )
   const {loading}= useSelector((state)=>state.Auth);  
   console.log(loading);
   
   const [showpassword,setShowpassword]= useState(false);
   const [showconfirmpassword,setShowconfirmpassword]= useState(false);

   const handleonchange =(event)=>
   {
    setformdata((prevdata)=>{
        return {
            ...prevdata,[event.target.name]:event.target.value
        }
        
    });
    console.log(formdata.Password,formdata.ConfirmPassword);

   }

const handleonsubmit=(event)=>{
    event.preventDefault();

    dispatch(ResetPassword(Token,formdata));
    console.log(formdata);
    setTimeout(() => {
        navigate("/login");
        
    }, 2000);

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
                    type={showpassword?"text":'password'} required name='Password' value={formdata.Password} placeholder='enter password' onChange={handleonchange} >
                       
                    </input>
                    <span onClick={()=>{
                        setShowpassword((pev)=>!pev)
                    }}>
                            {
                                showpassword?<AiFillEyeInvisible/>:<AiFillEye/>
                            }
                        </span>
                   </label>
                   <label>
                    Confirm New Password
                    <input  className='text-black' type={showconfirmpassword?"text":'Password'} required name='ConfirmPassword' value={formdata.confirmpassword} placeholder='enter confirm password' 
                    onChange={handleonchange}>
                        
                    </input>
                    <span onClick={()=>{
                        setShowconfirmpassword((pev)=>!pev)
                    }}>
                            {
                                showconfirmpassword?<AiFillEyeInvisible/>:<AiFillEye/>
                            }
                        </span>
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