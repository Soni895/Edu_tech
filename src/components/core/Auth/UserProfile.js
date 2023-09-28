import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

function UserProfile() {
  return (
    <Link to="/">
    <button onClick={() => {
      
        toast.success("Logged Out");
    }}
    className='bg-richblack-800 text-richblack-100 py-[8px] 
    px-[12px] rounded-[8px] border border-richblack-700'>
       UserProfile
    </button>
</Link> 
  )
}

export default UserProfile