
import toast from "react-hot-toast";
import  {StudentEndpoints} from "../APIs";
import { ApiConnector } from "../ApiConnector";
import rzpLogo from "../../assets/Logo/rzp_logo.png"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setPaymentloading } from "../../Slices/CourseSlice";
import { Resetcart } from "../../Slices/CartSlice";



const {COURSE_PAYMENT_API,COURSE_VERIFY_API,SEND_PAYMENT_SUCCESS_EMAIL_API}=StudentEndpoints;


// Load the Razorpay SDK from the CDN
function LoadScript(src)
{
 
        return new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = src;
        
            script.onload = () => {
              resolve(true);
            };
        
            script.onerror = () => {
              reject(new Error(`Error loading script: ${src}`));
            };
        
            document.head.appendChild(script);
          });
}
async function  SendPaymentSuccessEmail(response,amount,Token)
{

    console.log("SendPaymentSuccessEmail function called=>");
    try {
        const Mail_Response= await  ApiConnector("POST",SEND_PAYMENT_SUCCESS_EMAIL_API,{
            orderId:response.razorpay_order_id
            , paymentId:response.razorpay_payment_id, amount
        },{
            Authorization: `Bearer ${Token}`,});
            console.log("Mail_Response=>",Mail_Response);
        return Mail_Response;
    } catch (error) {

        console.log("faild in sending successful payment mail");
        toast.error("MailSend Unsuccessful");
        console.log(error);
        return error;
        
    }
}

async function  VerifyPayment(bodydata,Token,navigate,dispatch){

    const toastId=toast.loading("verify Payment...");
    dispatch(setPaymentloading(true));
    try {
        
        const  VerifyPayment_Resposne= await ApiConnector("post",COURSE_VERIFY_API,bodydata,{
            Authorization: `Bearer ${Token}`,});
            if(!VerifyPayment_Resposne.data.success)
            {
                throw new Error(VerifyPayment_Resposne.data.message)
            }
            toast.success("Payment success");
            navigate("/dashbaord/enrollcourse");
            dispatch(Resetcart());
        
    } catch (error) {

        console.log(error);
        toast.error("Payment Verify Failed");
        console.log("error in verify payment")
        
    }
    toast.dismiss(toastId);
    dispatch(setPaymentloading(false));
    
}



export const  BuyCourse=async(Token,navigate,dispatch,UserDetailes,Courses)=>
{
    const toastId=toast.loading("laoding...");
    console.log(Token,UserDetailes,Courses);
    try {
        const response= await LoadScript("https://checkout.razorpay.com/v1/checkout.js");
        if(response)
        {
            console.log("script oaded success fully");
        }
        console.log(response);
        if(!response)
        {
            toast.error("razorpaly failed to laod script sdk");
            return ; 
        }

        // initiate the order
        const order_Response= await ApiConnector("POST",COURSE_PAYMENT_API,{Courses,Token},{
            Authorization: `Bearer ${Token}`});

         console.log("order_response=>",order_Response);
          if(!order_Response)
          {
            throw new Error(order_Response);
          }  
          
        //   options
        const Options={
            key:process.env.REACT_APP_razorpay_key_secret , // Enter the Key ID generated from the Dashboard
            amount:order_Response.data?.PaymentResponse ?.amount,
            currency:order_Response?.data?.PaymentResponse ?.currency,
            order_id:order_Response?.data?.PaymentResponse ?.id,
            description:"thanku for puchase the course",
            name:"Study Notion",
            image:rzpLogo,
            prefill:
            {
                name:UserDetailes.FirstName+" "+UserDetailes.LastName,
                email:UserDetailes.Email,
            },
            handler:function(response)
            {
               console.log(response);
                alert(order_Response?.data?.PaymentResponse ?.id);
                // send  successful mail
                // verify payment
                // console.log("response=>",response);
                // SendPaymentSuccessEmail(response,order_Response.data.PaymentResponse.amount,Token);
                // VerifyPayment({...response,Courses},Token,navigate,dispatch);

            },
            // notes:,
        }

        //print razor pay options
        console.log(" printing option inside the feature api Options=>",Options);
        // const rzp1 = new Razorpay(Options);
          console.log("PAYMENT RESPONSE FROM BACKEND............", order_Response.data);
          const paymentObject = new  window.Razorpay(Options);
          paymentObject.open();
          paymentObject.on("payment.failed", function (response) {
            toast.error("Oops! Payment Failed.");
            console.log(response.error);
          });

    } catch (error) {
        
        console.log("error in payment proecess","\n",error);
        toast.error("Payment Failed");
        
    }
    toast.dismiss(toastId);

}


