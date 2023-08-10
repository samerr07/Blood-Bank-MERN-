import axios from "axios";
import { BASEURL } from "../utils/config";

const API = axios.create({baseURL:BASEURL});

API.interceptors.request.use((req)=>{
    if(localStorage.getItem("token")){
        req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    }
    return req;
})

export default API;