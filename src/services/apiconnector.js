import axios, { Axios } from "axios"; 

export const AxiosInstance= axios.create({});

export const ApiConnector=(method,url,bodydata,header,params)=>
{
    return AxiosInstance(
        {
            method:method,
            url:url,
            data:bodydata?bodydata:null,
            header:header?header:null,
            params:params?params:null,
        }
    )

}