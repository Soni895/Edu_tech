import toast from "react-hot-toast";
import { setloading,setToken} from "../../Slices/AuthSlice"
import { ApiConnector } from "../apiconnector";
import {endpoints} from "../apis";
import { Categories } from "../apis";
import {setUser} from "../../Slices/ProfileSlice";




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


export const Login= ({email:Email,password:Password},navigate)=>
{
    return  async (dispatch)=>
    {
        const toastId = toast.loading("Loading...")
        dispatch(setloading(true));

        console.log(" inside the login Auth API handler Email and password=>",Email,Password);

        try {
            const response=await ApiConnector("post",endpoints.LOGIN_API,{
                Email,Password
            });
            console.log(" login response=>",response);
            dispatch(setToken(response.data.token));
            dispatch(setUser(response?.data?.user));
            toast.success("Login sucecssful");
            navigate("/dashboard/my-profile",{ replace: true });



            
            
        } catch (error) {

            console.log(error);
            toast.error("failed to login");
            
        }

        dispatch(setloading(false));
        toast.dismiss(toastId)

    }
}



export const Sendotp = (email,navigate) => {

    return async (dispatch)=>
    {
        console.log("otp handler call=>",email);
        const toastId = toast.loading("Loading...") ;
        console.log("toastId=>",toastId);
        dispatch(setloading(true));
        try {
            const response= await ApiConnector("post",endpoints.SENDOTP_API,{Email:email});
               console.log("response inside send otp=>",response);

               if (!response.data.status==="OK") {
                throw new Error(response.data.message)

              }
             
              toast.success("Otp send Successful");
              navigate("/VerifyEmail");
             

            
        } catch (error) {

            console.log("SENDOTP API ERROR............", error);
            toast.error("Could Not Send OTP");
            
        }
       
        toast.dismiss(toastId);
        dispatch(setloading(false));


    }
 
}

export const Signup= ( 
    AccountType,
    FirstName,
    LastName,
    Email,
    Password,
    ConfirmPassword,
    Otp,
    navigate)=>
{
    console.log("user data=>", AccountType,
        FirstName,
        LastName,
        Email,
        Password,
        ConfirmPassword,
        Otp,)
    return async (dispatch)=>
    {
        console.log("signup data handler called");

        try {
            dispatch(setloading(true));
            const response= await ApiConnector("post",endpoints.SIGNUP_API,{AccountType,
                FirstName,
                LastName,
                Email,
                Password,
                ConfirmPassword,
                Otp,});
            
                console.log("response=>",response);
                if (!response.data.status==="OK") {
                    throw new Error(response.data.message)
                  }
                  
                toast.success(response?.data?.message);
                navigate("/login");


            
        } catch (error) {

            console.log(error);
            toast.error("faild to signup");
            navigate("/signup");
        }
        dispatch(setloading(false));

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