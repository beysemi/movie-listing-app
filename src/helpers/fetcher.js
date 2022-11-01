import axios from "axios";

import { API_BASE, API_KEY } from "../lib/constans/api";

const instance = axios.create({ baseURL: API_BASE });

instance.interceptors.request.use(config => {
    config.params = {
        api_key: API_KEY,
        ...config.params
    }

    return config;
});

instance.interceptors.response.use(response => response.data, error => {
    switch (error.response.status) {
        case 401:
            console.log("unauthorized");
            break;
        case 404:
            console.log("not found");
            break;
        default:
            console.log("unhandled error");
            break;
    }
});



export default instance;