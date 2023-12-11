import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import { useEffect, useState } from "react";
import Navbar from "./components/common/Navbar";
import Login from "./Pages/Login"
import Dashboard from "./Pages/Dashboard"
import PrivateRoute from "./Pages/PrivateRoute";
import ResetPassword from "./Pages/ResetPassword";
import Updatepassword from "./Pages/Updatepassword";
import VerifyEmail from "./Pages/VerifyEmail";
import About from "./Pages/About";
import Myprofile from "./components/core/dashboard/Myprofile";
import Setting from "./components/core/dashboard/setting/Setting";
import Enrolledcourses from "./components/core/dashboard/Enrolledcourses";
import Cart from "./components/core/dashboard/cart/Cart.js";
import { useSelector } from "react-redux";
import Createcourse from "./components/core/dashboard/AddCourse/Createcourse.js";
import MyCourses from "./components/core/dashboard/AddCourse/MyCourses.js";
import Error from "./Pages/Error.js";
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {Signupdata,Token}=useSelector((state)=>state.Auth);
 


  
useEffect(()=>{
  console.log("localStorage=>",localStorage);
  console.log("sessionStorage=>",sessionStorage);
  console.log("Printing base url: ",process.env.REACT_APP_Base_Url);
  console.log("islogin=>",isLoggedIn);
  console.log("Signupdata=>",Signupdata);
  console.log("token=>",Token);
});

 

  const {User}=useSelector((state)=>state.Profile);
  console.log("User=>",User);
  return (
    <div className="flex min-h-screen w-screen flex-col bg-richblack-900 font-inter">
    <Navbar />
      <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/about" element={<About/>}></Route>
       <Route path="/login" element = {<Login  />} />
        <Route path="/signup" element={<Signup  />} />
        <Route path="/resetpassword" element={<ResetPassword></ResetPassword>} ></Route>
        {/* <Route path="/dashboard" element ={
          <PrivateRoute isLoggedIn={isLoggedIn}> </PrivateRoute>
        } /> */}
        <Route path="/Update-Password/:id" element={<Updatepassword/>}></Route>
        <Route path="/VerifyEmail" element={<VerifyEmail/>} ></Route>
       
        <Route path="/dashboard" element={<Dashboard/>}>
        <Route path="/dashboard/my-profile" element={<Myprofile></Myprofile>}/>
          <Route path="/dashboard/Setting" element={<Setting/>}/>
          <Route path="/dashboard/enrolled-courses" element={<Enrolledcourses/>}/>
          <Route path="/dashboard/cart" element={<Cart></Cart>}></Route>
        </Route>
        <Route path="/createcourse" element={<Createcourse/>}></Route>
        <Route path="/MyCourses" element={<MyCourses/>}></Route>

        {/* 404 Page */}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
