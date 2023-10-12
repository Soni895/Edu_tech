import toast from "react-hot-toast";
import { setLoading } from "../../Slices/AuthSlice"
import { ApiConnector } from "../apiconnector";
import {endpoints} from "../apis";



export const getpasswordresettoken=(email,setemailsent)=>
{
    return async(dispatch)=>
    {
        dispatch(setLoading(true));
        try {
            const response= await ApiConnector("post",endpoints.RESETPASSWORD_API, {email})
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