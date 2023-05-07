

import React,{ createContext, useState } from "react";
export const FormContext = createContext(null);

export const FormProvider = ({ children }) => {
    const [loginStatus, setloginStatus] = useState(false)
    const [register,setResgister]=useState({
        username:"",
        email:"",
        password:"",
        image:""
    })
    const value={
        loginStatus,
        register,
        setloginStatus,
        setResgister,
    }
    return <FormContext.Provider value={value}>{children}</FormContext.Provider>

}