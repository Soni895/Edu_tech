import toast from "react-hot-toast";
import ResetPassword from "../../Pages/ResetPassword";
import { setLoading } from "../../Slices/AuthSlice"
import { ApiConnector } from "../apiconnector";
import {endpoints} from "../apis";
export const getpasswordresettoken=(email,setemail)=>
{
    return async(dispatch)=>
    {
        dispatch(setLoading(true));
        try {
            const response= await ApiConnector("post",endpoints.RESETPASSTOKEN_API, {email})
            console.log ("response=>",response);

            if(!response.data.success)
            {
                throw new Error(response.data.message);
            }
            toast.success("Reset Email Sent");

        } catch (error) {
            console.log(error);
            
        }

        dispatch(setLoading(false));
         
    }


     
}