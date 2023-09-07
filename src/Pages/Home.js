import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { BsArrowRightCircleFill } from 'react-icons/bs';

function Home() {
  return (
    <div>
  {/* //  section 1 */}

  <div>
   <NavLink to={"/signup"}>
<div>
  <p>
    Become an Instructor
  </p>
  <BsArrowRightCircleFill/>
</div>
   </NavLink>
  </div> 

    {/* // section  2 */}


  {/* // section  3 */}


     
  {/* // footer */}
  </div>
  );
}

export default Home