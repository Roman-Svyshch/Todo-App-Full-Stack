import { apiClient } from './ApiClient';

export function retrieveHelloWorldBean(){
return apiClient.get('/hello-world-bean')
}

export function retrieveHelloWorldBeanName(username,token){
  return apiClient.get(`hello-world/path-variable/${username}`
  //,{
  //  headers:{
   //   Authorization: token   
//}
 // })
  //}
  )}
  
  export const executeBasicAuthService 
  = (token)=> apiClient.get('/basicauth',{
    headers:{
      Authorization:token
    }
  })