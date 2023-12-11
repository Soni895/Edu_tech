import axios from 'axios'; 

 const AxiosInstance= axios.create({});

export const ApiConnector=(method,url,bodydata,headers,params)=>
{
    return AxiosInstance(
        {
            method:method,
            url:url,
            data:bodydata?bodydata:null,
            header:headers?headers:null,
            params:params?params:null,
        }
    )

}