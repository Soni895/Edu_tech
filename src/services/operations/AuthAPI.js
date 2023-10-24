import toast from "react-hot-toast";
import { setLoading } from "../../Slices/AuthSlice"
import { ApiConnector } from "../apiconnector";
import {endpoints} from "../apis";
import { Categories } from "../apis";





export const getpasswordresettoken=(email,setemailsent)=>
{
    console.log("email=>",email);
    return async(dispatch)=>
    {
        dispatch(setLoading(true));
        try {
            console.log("endpoints.RESETPASSWORD_API=>",endpoints.RESETPASSTOKEN_API);
            const response= await ApiConnector("post",endpoints.RESETPASSTOKEN_API, {email})
            console.log ("response=>",response);
           

            if(!response.data.success)
            {
                throw new Error(response.data.message);
            }
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

export const  getAllcategory= async(setsublink)=>
{
   try {
    const response= await ApiConnector("Get",Categories.Category_Api);
    console.log("Category_Api=>",Categories.Category_Api);
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