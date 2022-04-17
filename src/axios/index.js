import axios from "axios";

const baseURL = "http://localhost:8082/";


const instance = axios.create({
    baseURL: baseURL
});

instance.defaults.timeout=1000;
// instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
instance.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

/********拦截器********* */
// request 拦截器
instance.interceptors.request.use(config => {
    // 判断是否设置token todo

    return config;
}, error => {
    console.log(error)
    Promise.reject(error)
})

// 响应拦截器
instance.interceptors.response.use(res => {
    // 获取状态码
    const code = res.data.code || 200;
    const msg = res.data.msg || "未知消息";
    if(code != 200){
        console.log(msg);
        return Promise.reject(new Error(msg));
    }else{
        return res.data;
    }
}, error => {
    console.log(error);
    return Promise.reject(error);
})

