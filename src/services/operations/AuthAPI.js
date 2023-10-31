import toast from "react-hot-toast";
import { setloading } from "../../Slices/AuthSlice"
import { ApiConnector } from "../apiconnector";
import {endpoints} from "../apis";
import { Categories } from "../apis";
import { useSelector } from "react-redux";



// Inside your component where you call ResetPassword


export const Getpasswordresettoken=(Email,setemailsent)=>
{
    
    console.log("email=>",Email);
    return async(dispatch)=>
    {

        dispatch(setloading(true));
        try {
            console.log("endpoints.RESETPASSWORD_API=>",endpoints.RESETPASSTOKEN_API);
            const response= await ApiConnector("POST",endpoints.RESETPASSTOKEN_API, {Email})
            console.log ("response=>",response);
           

            if(!response.data.status)
            {
                throw new Error(response.data.message);
            }
            toast.success("Reset Email Sent");
            setemailsent(true);

        } catch (error) {

            console.log(error);
            toast.error("Reset Email Sent failed");
            
        }

        dispatch(setloading(false));
         
    }
     
}
export const  ResetPassword=(Token,{Password,ConfirmPassword})=>
{

    
    console.log(Token,Password,ConfirmPassword);
  

    return async(dispatch)=>
    {
        console.log("dispatch=>",dispatch);
        
        dispatch(setloading(true));
       
        try {
            console.log("endpoints.RESETPASSWORD_API=>",endpoints.RESETPASSWORD_API);
            const response=await ApiConnector("post",endpoints.RESETPASSWORD_API, {Token,ConfirmPassword,Password})
            console.log("response resetpassowrd=>",response);
            toast.success("password  reset successful");

            if(!response.data.success)
            {
                throw new Error(response.data.message);
            }

           
        } 
        
         catch (error) {

            console.log(error);
            toast.error(" failed");
            
        }

        dispatch(setloading(false));
      
    }
}



export const Signup= ()=>
{

}


export const Sendotp = (email) => {

    const {signupData}=useSelector((state)=>state.Auth);
console.log("signupData=>",signupData);

    return async (dispatch)=>
    {
        console.log("otp handler call=>",email);
    }
 
}

export const logout= ()=>
{
    
}

export  const  GetAllcategory= async(setsublink)=>
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