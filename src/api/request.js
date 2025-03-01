import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com', // 替换为你的 API 地址
    timeout: 10000,
});

// 请求拦截器
instance.interceptors.request.use(
    (config) => {
        // 可以在这里添加请求头，例如 token
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 响应拦截器
instance.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default instance;