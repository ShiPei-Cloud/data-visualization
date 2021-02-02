// 请求数据
import axios from 'axios'
const domainName = "http://192.168.1.136:8060/42floor/profile";
const fetch = (urlPostfix,responseType) => {
     let url = domainName + urlPostfix;
    return axios({
        method:'get',
        url,
        responseType
    })
};
export default fetch;