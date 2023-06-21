import axios from 'axios';

const axiosClient = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BACKEND_API}`,
    headers: {
        'X-Requested-With': 'XMLHttpRequest'
    },
    withCredentials: true,
});

axiosClient.interceptors.request.use((config) => {
    const token = "token 1";
    config.headers.Authorization = `Bearer ${token}`;
    
    return config;
});

axiosClient.interceptors.response.use((response) => {
    return response;
}, (error) => {
    const response = error?.response;
    console.log(response, error)
    
    if(response.status === 401) {
        // Remove token from cookies
        console.log("token");
    } 

    throw error;
});


export default axiosClient;