
import toast from "react-hot-toast";
import  {StudentEndpoints} from "../APIs";
import { ApiConnector } from "../ApiConnector";
import rzpLogo from "../../assets/Logo/rzp_logo.png"

const {COURSE_PAYMENT_API,COURSE_VERIFY_API,SEND_PAYMENT_SUCCESS_EMAIL_API}=StudentEndpoints;

export const studentFeaturesAPI = () => {

    console.log("student enroll api all");
  
}
// Load the Razorpay SDK from the CDN
function LoadScript(src)
{
    return new Promise((resolve, reject)=>
    {
        const script = document.createElement('script');
        script.src=src;


        script.onload=()=>
        {
          
            resolve(true);
        }

        script.onerror=()=>
        {
            reject(false);
        }
        document.body.appendChild(script);

    })
}

export const  BuyCourse=async(Courses,Token)=>
{
    const toastId=toast.loading("laoding...");
    
    try {
        const response= await LoadScript("https://checkout.razorpay.com/v1/checkout.js");
        console.log(response);
        if(!response)
        {
            toast.error("razorpaly failed to laod script sdk");
            return ; 
        }

        const data= {
            Courses,
        }
        // initiate the order
        const order_Response= await ApiConnector("post",COURSE_PAYMENT_API,{Courses},{
            Authorization: `Bearer ${Token}`,});

          if(!order_Response)
          {
            throw new Error(order_Response.data.message);
        
          }  

        //   options
        const Options={
            key:process.env.REACT_APP_razorpay_key_secret , // Enter the Key ID generated from the Dashboard
            amount:order_Response.data.data.Amount,
            currency:order_Response.data.data.currency,
            order_id:order_Response.data.data.id,
            description:"thanku for puchase the course",
            name:"Study Notion",
            image:rzpLogo,
            prefill:
            {
                name:UserDeatiles.Firstname+" "+UserDeatiles.LastName,
                Email:UserDetailes.Email,
            },
            handler:function(response)
            {
                // send  successful mail
                // verify payment

                SendPaymentSuccessEmail();
                VerifyPayment();

            },
            notes:,
        }
        const rzp1 = new Razorpay(Options);
          console.log("PAYMENT RESPONSE FROM BACKEND............", order_Response.data);


    } catch (error) {
        
    }

}