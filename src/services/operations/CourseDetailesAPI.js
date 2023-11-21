import { ApiConnector } from "../ApiConnector";
import { Categories } from "../APIs";


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