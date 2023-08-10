
import {createAsyncThunk} from "@reduxjs/toolkit"
import API from "../../../services/API"
// import { toast } from "react-toastify";

export const userLogin = createAsyncThunk("auth/login",async({role,email,password},{rejectWithValue})=>{
    try{
        const {data} = await API.post("auth/login",{role,email,password});
        //store token
        if(data.success){
            localStorage.setItem("token",data.token);
            alert(data.message)
            window.location.replace("/");
        }
        return data;
    } catch(err){
        if(err.response && err.response.data.message){
            return rejectWithValue(err.response.data.message)
        } else {
            return rejectWithValue(err.message)
        }
    }
})

export const userRegister = createAsyncThunk("auth/register",async({name,
    email,
    role,
    password,
    phone,
    website,
    address,
    organisationName,
    hospitalName},
    {rejectWithValue}
    )=>{
    try{
        const {data} = await API.post("/auth/register",{name,
            email,
            role,
            password,
            phone,
            website,
            address,
            organisationName,
            hospitalName})

            if(data?.success){
                alert("User Registerd Successfully");
                window.location.replace("/login")
            }
    } catch(err){
        console.log(err)
        if(err.response && err.response.data.message){
            return rejectWithValue(err.response.data.message)
        } else {
            return rejectWithValue(err.message)
        }
    }
})

export const getCurrentUser = createAsyncThunk("auth/getCurrentUser",async({rejectWithValue})=>{
    try{
        const res = await API.get("/auth/currentUser");
        if(res?.data){
            return res?.data;
        }
     } catch(err){
        console.log(err)
        if(err.response && err.response.data.message){
            return rejectWithValue(err.response.data.message)
        } else {
            return rejectWithValue(err.message)
        }
        }
    }
)
