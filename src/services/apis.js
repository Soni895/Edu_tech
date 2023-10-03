// const Base_Url=process.env.Base_Url
const Base_Url="http://localhost:4000/api/v1/";

console.log("Base_Url=>",Base_Url);

export const Categories= 
{
  Category_Api: Base_Url+"/Course/GetAllCategory",

}