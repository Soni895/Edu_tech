import React from 'react'
import { getAllcategory } from '../services/operations/AuthAPI';
import { createContext} from 'react';

export const categorycontext= createContext();

const CategoryContext = ({children}) => {

function check(data)
{
  console.log(data);
}

const value={
  getAllcategory,
}

  return (<categorycontext.Provider value={value}>
    {children}
   </categorycontext.Provider>);
 
}

export default CategoryContext