import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import Rootreducer from "./Reducer/index";
import CategoryContext from "./context/CategoryContext";
const store=configureStore(
    {
        reducer:Rootreducer,
    }
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<Provider store={store}>
<BrowserRouter>
<CategoryContext>
 <App/>
 </CategoryContext>
  <Toaster/>
 </BrowserRouter>
</Provider>
);
