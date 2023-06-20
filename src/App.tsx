import {useState,useEffect} from 'react'
import { Navigate } from 'react-router-dom'
import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Account from "./Pages/Account"
import Spinner from './Components/Spinner'
function App() {
  const [loading,setLoading]=useState(true)
  const getToken=localStorage.getItem('token')
  
  const RequireAuth = ({children}:any) => {

    return  !!getToken===true?children:<Navigate to="/"  />;
  }
  useEffect(
    ()=>{
      setLoading(false)
    },[]
  )
   if(loading) return(
       <Spinner />
   )
  return (
     <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/account' element={<RequireAuth><Account/></RequireAuth> }/>
        </Routes>
     </Router>
  )
}

export default App
