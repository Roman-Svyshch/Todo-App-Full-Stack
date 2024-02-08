import {useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from './security/AuthContext'
function LoginComponent(){

  const[username,setUsername] = useState('')
  const[password,setPassword] = useState('')
  const[showSuccessMessage,setSuccessMessage] = useState(false)
  const[showErrorMessage,setErrorMessage] = useState(false)
  const navigate = useNavigate();
  const authContex = useAuth();




  function inputUsername(event){
    setUsername(event.target.value)
  }
  function inputPassword(event){
    setPassword(event.target.value)
  }

  async function handleSubmit() {
    if (await authContex.login(username, password)) {
      setSuccessMessage(true);
      navigate(`/welcome/${username}`);
    } else {
      setErrorMessage(true);
      navigate('/error');
    }
  }
      function SuccessMesageComponent(){
      if(showSuccessMessage){
        return <div className='successMessage'>Authenticated successfull</div>
    }return null;
    }
  

  return(
    <div className="Login">
      
     <SuccessMesageComponent />
     
      <div className="LoginForm">
        <div>
          <label htmlFor="">User Name</label>
          <input type="text" placeholder="User name"  value={username} onChange={inputUsername}/>
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="password" placeholder="password" value={password} onChange={inputPassword}/>
        </div>
        <div>
          <button type="button" name="login" onClick={handleSubmit}>login</button>
        </div>
      </div>
    </div>
  )
}
export default LoginComponent;