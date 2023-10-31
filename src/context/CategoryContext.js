import React from 'react'
import { GetAllcategory } from '../services/operations/AuthAPI';
import { createContext} from 'react';

export const categorycontext= createContext();

const CategoryContext = ({children}) => {


const value={
  GetAllcategory,
}

  return (<categorycontext.Provider value={value}>
    {children}
   </categorycontext.Provider>);
 
}

export default CategoryContext