import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";

function App() {
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/signup" element={<Signup/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
