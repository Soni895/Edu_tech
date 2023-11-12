import { ApiConnector } from "../apiconnector";
import { Categories } from "../apis";


export const GetCategory= async()=>
{
    try {

        const response= await ApiConnector("get",Categories.CATEGORIES_API);
        console.log(response);
        return response;        
    } catch (error) {

        console.log(error);
        
    }

}