import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import { useState } from "react";
import Navbar from "./components/common/Navbar";
import Login from "./Pages/Login"
import Dashboard from "./Pages/Dashboard"
import PrivateRoute from "./Pages/PrivateRoute";
import ResetPassword from "./Pages/ResetPassword";
import Updatepassword from "./Pages/Updatepassword";
import VerifyEmail from "./Pages/VerifyEmail";
import About from "./Pages/About";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/about" element={<About/>}></Route>
       <Route path="/login" element = {<Login  setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup  setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/resetpassword" element={<ResetPassword></ResetPassword>} ></Route>
        {/* <Route path="/dashboard" element ={
          <PrivateRoute isLoggedIn={isLoggedIn}> </PrivateRoute>
        } /> */}
        <Route path="/updatepassword/:id" element={<Updatepassword/>}></Route>
        <Route path="/VerifyEmail" element={<VerifyEmail/>} ></Route>
        {/* <Route path="/dashboard/my-profile" element={<Myprofile></Myprofile>}></Route> */}
        <Route path="/dashboard" element={<Dashboard/>}></Route>
      </Routes>
    </div>
  );
}


export default App;
