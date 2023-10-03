// const REACT_APP_Base_Url=process.env.Base_Url
const REACT_APP_Base_Url="http://localhost:4000/api/v1/";

console.log("REACT_APP_Base_Url=>",REACT_APP_Base_Url);

export const Categories= 
{
  Category_Api: REACT_APP_Base_Url+"/Course/GetAllCategory",

}