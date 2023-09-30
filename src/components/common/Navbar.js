
import logo from "../../assets/Logo/Logo.svg"
import {Link} from "react-router-dom"
import {toast} from "react-hot-toast"
import {NavbarLinks} from '../../data/navbar-links';
import { useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import UserProfile from "../core/Auth/UserProfile";
import { useEffect, useState } from "react";
import { ApiConnector } from "../../services/apiconnector";
import { Categories } from "../../services/apis";


const Navbar = (props) => {

const {Token}= useSelector((state)=>state.Auth);
const {User}=useSelector((state)=>state.Profile);
const {TotalItems}=useSelector((state)=>state.Cart);

const [sublink,setsublink]= useState([]);

const getsublink=async()=>
{
    try {
        const response= await ApiConnector("get",Categories.Category_Api );
        console.log("response=>",response);
        setsublink(response.data.data);
        
    } catch (error) {
        alert("unable to fetch category");
        
    }

}


useEffect(()=>
{


})

// console.log("Token=>",Token,"Profile=>",Profile,"User=>",User);


    const location = useLocation();
    const matchroute = (path) => {
        return location.pathname === path;
      };

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className=' border-b-2  border-richblack-800'>
 <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>

<Link to="/"> 
    <img src={logo} alt="Logo" width={160} height={32} loading="lazy"/>
</Link>

<nav>
    <ul className='text-richblack-100 flex gap-x-6'>
    
    {
        NavbarLinks.map((data,index)=>
        {
            return(
            <li key={index}>

            {
                data.title!=="Catalog"?(  
                    <Link to={data?.path}>
                  <p  className={`${!matchroute(data.path)?"text-richblack-25":"text-yellow-25"}`}>
                  {data?.title}
                  </p>  </Link>
                    ):(
                    <h1>hi</h1>
                    )
            }
        
            </li>         
            )
            
        })
    }
    
    </ul>
</nav>

{/* Login - SignUp - LogOut - Dashboard */}
<div className='flex items-center gap-x-4'>
   
   {
    User && User?.AccountType!=="Instructor" &&(
        <link to={"/dashboard/cart"} className="relative">
        <AiOutlineShoppingCart/>
        {
            TotalItems > 0 && (
                <spam>
                {TotalItems}
                </spam>
            )
        }
        </link>

    )
   }
   
    {
        Token===null &&
         // !isLoggedIn && 
       ( <Link to="/login">
            <button className='bg-richblack-800 text-richblack-100 py-[8px] 
            px-[12px] rounded-[8px] border border-richblack-700'>
                Log in
            </button>
        </Link>)
    }
    {
        Token===null &&
        // !isLoggedIn &&
        (<Link to="/signup">
            <button  className='bg-richblack-800 text-richblack-100 py-[8px] 
            px-[12px] rounded-[8px] border border-richblack-700'>
                Sign up
            </button>
        </Link>)
    }
    { Token!==null &&(
        <UserProfile></UserProfile>
    )
        /* isLoggedIn &&
        <Link to="/">
            <button onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged Out");
            }}
            className='bg-richblack-800 text-richblack-100 py-[8px] 
            px-[12px] rounded-[8px] border border-richblack-700'>
                Log Out
            </button>
        </Link> */
    }
    { 
        /* isLoggedIn &&
        <Link to="/dashboard">
            <button onClick={()=>
            {
                setIsLoggedIn(true);
                toast.success("Dashboard");
            }}
             className='bg-richblack-800 text-richblack-100 py-[8px] 
            px-[12px] rounded-[8px] border border-richblack-700'>
                Dashboard
            </button>
        </Link> */
    }
</div>
</div>
    </div>
   
  )
}

export default Navbar
