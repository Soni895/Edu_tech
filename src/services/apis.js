const Base_Url=process.env.React_App_Url

console.log("Base_Url=>",Base_Url);

export const Categories= 
{
  Category_Api: Base_Url+"/Course/GetAllCategory",

}