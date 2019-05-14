import {apolloFetch} from "./config";
import {message} from "antd";

/*token 的验证*/
export const sendToken = ()=>{
  apolloFetch.use(({request, options}, next) => {
    if (!options.headers) {
      options.headers = {};
    }
    options.headers['authorization'] = localStorage.getItem("token");
    next();
  });
};

/*登陆与否的验证*/
export const  checkInput = (obj) => {
  for (let item in obj) {
    if (obj[item].trim() === "") {
      message.error("Please enter your " + item + ".");
      return false
    }
  }
  return true
};

/**将字符串转换成数组**/
export const transStringToArray=(obj)=>{
    return  obj.split(',');
  };
