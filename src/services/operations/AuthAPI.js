import toast from "react-hot-toast";
import { setLoading } from "../../Slices/AuthSlice"
import { ApiConnector } from "../apiconnector";
import {endpoints} from "../apis";



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

export const sendotp=()=>
{

}

export const signup= ()=>
{

}