import { ApiConnector } from "../apiconnector";
import { Categories } from "../apis";


export const GetCategory= async(setdata=null)=>
{
//    return async(dispatch)=>
//    {
     try {

    const response= await ApiConnector("get",Categories.CATEGORIES_API);
    console.log(response);
    return response;
    // setdata(response.data.response);

    
} catch (error) {

    console.log(error);
    
}


//    }
}