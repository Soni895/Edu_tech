import toast from "react-hot-toast";
import { setLoading } from "../../Slices/AuthSlice"
import { ApiConnector } from "../apiconnector";
import {endpoints} from "../apis";
import { Categories } from "../apis";


// Inside your component where you call ResetPassword


export const getpasswordresettoken=(Email,setemailsent)=>
{
    
    console.log("email=>",Email);
    return async(dispatch)=>
    {
        
        dispatch(setLoading(true));
        try {
            console.log("endpoints.RESETPASSWORD_API=>",endpoints.RESETPASSTOKEN_API);
            const response= await ApiConnector("POST",endpoints.RESETPASSTOKEN_API, {Email})
            console.log ("response=>",response);
           

            // if(!response.data.success)
            // {
            //     throw new Error(response.data.message);
            // }
            toast.success("Reset Email Sent");
            setemailsent(true);

        } catch (error) {

            console.log(error);
            toast.error("Reset Email Sent failed");
            
        }

        dispatch(setLoading(false));
         
    }
     
}
export const  ResetPassword=(Token,{Password,ConfirmPassword})=>
{
    console.log(Token,Password,ConfirmPassword);
  

    return async(dispatch)=>
    {
        
        dispatch(setLoading(true));
       
        try {
            console.log("endpoints.RESETPASSWORD_API=>",endpoints.RESETPASSWORD_API);
            const response=await ApiConnector("post",endpoints.RESETPASSWORD_API, {Token,ConfirmPassword,Password})
            console.log(response);
            toast.success("password set");

            if(!response.data.success)
            {
                throw new Error(response.data.message);
            }
        } 
        
         catch (error) {

            console.log(error);
            toast.error(" failed");
            
        }

        dispatch(setLoading(false));
    }
}



export const signup= ()=>
{

}


export const sendotp = () => {
 
}

export const logout= ()=>
{
    
}

export  const  getAllcategory= async(setsublink)=>
{
   try {
    const response= await ApiConnector("Get",Categories.CATEGORIES_API);
    console.log("Category_Api=>",Categories.CATEGORIES_API);
    console.log("response=>",response);
   const Description= response?.data?.response;
   console.log("Description=>",Description);
    setsublink(
        Description
      );

    
   } catch (error) {
    console.log(error,"unsuccessful to get category");
    
   }

}