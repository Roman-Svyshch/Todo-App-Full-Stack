
import './TodoApp.css'
import { BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import FooterComponent from './FooterComponent'
import LogoutComponent from './LogoutComponent'
import HeaderComponent from './HeaderComponent'
import ListTodosComponent from './ListTodosComponent'
import ErrorComponent from './ErrorCompnent'
import WelcomeComponent from './WelcomeComponent'
import LoginComponent from './LoginComponent'
import AuthProvider,{useAuth} from './security/AuthContext'
import TodoComponent from './TodoComponent'



function AuthentificatedRoute ({children}){
  const authContex = useAuth();
  if(authContex.isAuthentificated)
  return children;

  return<Navigate to="/" />
}

export default function TodoApp(){
  return(
    <div className="TodoApp">
      
    <AuthProvider>
      <BrowserRouter>
        <HeaderComponent />
            <Routes>
            Todo Manegment Application
              <Route path='/login' element={<LoginComponent/>} />
              <Route path='/welcome/:username' element={
                  <AuthentificatedRoute>
                    <WelcomeComponent/>
                  </AuthentificatedRoute>}/>
                
              <Route path='/listTodos' element={
                 <AuthentificatedRoute>
                  <ListTodosComponent />
                 </AuthentificatedRoute>}/>


              <Route path='/todo/:id' element={
                 <AuthentificatedRoute>
                  <TodoComponent />
                 </AuthentificatedRoute>}/>   
            
              
              <Route path='/logout' element={
                <AuthentificatedRoute>
                  <LogoutComponent />
                </AuthentificatedRoute>
              } />
              
              <Route path='/error' element={<ErrorComponent />} />
            </Routes>
         <FooterComponent />   
        </BrowserRouter>
        </AuthProvider>
      
    </div>
  )
}



