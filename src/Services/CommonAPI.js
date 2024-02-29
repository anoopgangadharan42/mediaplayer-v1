import axios from "axios";
export const CommonAPI = async (httpMethod,url,reqBody)=>{
    const reqconfig ={
        method:httpMethod,
        url,
        data:reqBody,
        headers:{
            "content-Type":"application/json"
        }
    }
     return await axios(reqconfig).then(
        (res)=>{
            return res
        }
     ).catch(err=>{
        return err
     })
    }