import React from 'react'
import { getAllcategory } from '../services/operations/AuthAPI';
import { createContext} from 'react';

export const categorycontext= createContext();

const CategoryContext = ({children}) => {


const value={
  getAllcategory,
}

  return (<categorycontext.Provider value={value}>
    {children}
   </categorycontext.Provider>);
 
}

export default CategoryContext