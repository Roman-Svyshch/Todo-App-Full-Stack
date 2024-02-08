
import { useState } from 'react';
import {Link, useParams } from 'react-router-dom'
import  { retrieveHelloWorldBeanName } from './api/HelloWorldApi';
import { useAuth } from './security/AuthContext';


function WelcomeComponent(){
  const {username} = useParams();
  const authContext = useAuth()
  const [message,setMessage] = useState(null)


function callHelloWorldRESTApi(){
retrieveHelloWorldBeanName('Roman',authContext.token)
        .then((response) => successfullResponse(response))
        .catch((error) => errorResponse(error))
        .finally(() => console.log('cleanup'))
}


function successfullResponse(response){
  console.log(response)
  setMessage(response.data.message)
}


function errorResponse(error){
  console.log(error)
}

  
    return(
      <div className="WelcomeComponent">
        <h1>Welcome {username}</h1>
       <div>
        Manege Your Todos  -<Link to="/listTodos"> Go here </Link>
       </div>
       <div>
        <button className='btn btn-success' onClick={callHelloWorldRESTApi}>
          call 
        </button>
       </div>
       <div className='text-info'>
          {message}
       </div>
      </div>
    )
  }
export default WelcomeComponent;  