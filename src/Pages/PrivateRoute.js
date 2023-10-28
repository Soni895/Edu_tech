import React from 'react'
import {Navigate} from 'react-router-dom';
import Dashboard from './Dashboard';

const PrivateRoute = ({isLoggedIn}) => {
  console.log(isLoggedIn);
  if(isLoggedIn) {
    return <Dashboard/>
  }
  else {
    return <Navigate to="/login"/>
  }
}

export default PrivateRoute
