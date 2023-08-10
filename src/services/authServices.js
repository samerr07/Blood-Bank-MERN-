import { userLogin, userRegister } from "../redux/features/auth/authActions";
import store from "../redux/store"

export const handleLogin = (e,email,password,role)=>{
    e.preventDefault();
    try{
        if(!role || !email || !password){
            return alert("Please provide all fields")
        }
        store.dispatch(userLogin({email,password,role}))
    } catch(err){
        console.log(err)
    }
}

export const handleRegister = (
    e,
    name,
    email,
    role,
    password,
    phone,
    website,
    address,
    organisationName,
    hospitalName
    )=>{
    e.preventDefault();
    try{
        
            store.dispatch(userRegister({name,
                email,
                role,
                password,
                phone,
                website,
                address,
                organisationName,
                hospitalName}))
    } catch(err){
        console.log(err)
    }
}