import { createContext, useContext, useState } from "react";
import {executeBasicAuthService} from "../api/HelloWorldApi"
import { Await } from "react-router-dom";
import { apiClient } from "../api/ApiClient";

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)


export default function AuthProvider({children}){

 
 const [isAuthentificated,SetAuthentificated] = useState(false)
 const [username,setUsername] = useState(null)
 const [token,setToken] = useState(null)



 async function login(username,password){
  const basicAuthToken = 'Basic ' + window.btoa(username + ":"  + password)
try{
  const response = await executeBasicAuthService(basicAuthToken)

  if(response.status === 200){
    SetAuthentificated(true)
    setUsername(username)
    setToken(basicAuthToken)

    apiClient.interceptors.request.use(
      (config) =>{
        console.log('intercepting and adding a token')
        config.headers.Authorization = basicAuthToken
        return config
      }
    )

    return true
  }else{
    SetAuthentificated(false)
    setUsername(null)
    setToken(null)
    return false
  }
}catch(error){
   SetAuthentificated(false)
    setUsername(null)
    setToken(null)
    return false
}
 }

 function logout()  {
    SetAuthentificated(false)
    setToken(null)
    setUsername(null)

 }
  return(

    <AuthContext.Provider value={{isAuthentificated,login,logout,username,token}}>
      {children}
    </AuthContext.Provider>
  )
}