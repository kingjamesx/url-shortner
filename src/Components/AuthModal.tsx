import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { set } from 'date-fns';
import {useState,useEffect} from 'react'
 import {GrClose} from 'react-icons/gr'
import { useNavigate } from 'react-router-dom';
const AuthModal = ({close}:{ close: () => void; }) => {
  const navigate=useNavigate()
   const [signIn,setSignIn]=useState(false)
   const [form,setForm]=useState({
    name:'',
      email:"",
      password:""
   })
  
   const handleSignIn=()=>{
      setSignIn(!signIn)
   }
   const handleChange=(e:any)=>{
    
      setForm((prev)=>({
        ...prev,
        [e.target.name]:e.target.value
      }))
   }
   const submitSignUp= async(e:React.SyntheticEvent)=>{
    e.preventDefault()
    try{
      const response=await axios.post(`${import.meta.env.VITE_BASE_URL}auth/signup`,{...form})
      const  data = await response.data
      toast.success('account creation sucessfully')
      setSignIn(!signIn)
    }catch(error){
      console.log(error)
     toast.error(error.response.data.error.message)
    }

   }
   const submitSignIn= async(e:React.SyntheticEvent)=>{
    e.preventDefault()
    try{
      const response=await axios.post(`${import.meta.env.VITE_BASE_URL}auth/signin`,form)
      const  data = await response.data
      toast.success('logged in sucessfully')
         localStorage.setItem('token',data.token)
      navigate('/account')
         
    }catch(error){
      toast.error('incorrect email or password')
    
   
    }
       
   }

  return (
    <div className='z-[1000000] fixed w-full h-full flex items-center justify-center'>
      <ToastContainer />
    <section className='bg-white p-6  '>
        <div className='flex justify-between items-center'>
           {signIn?<p className='font-bold'>Sign In</p>:<p className='font-bold'>Sign Up</p>} 
             <span className='cursor-pointer' onClick={close}><GrClose /></span>
        </div>

        <form>
           {!signIn &&<input type="text" name='name' value={form.name} onChange={handleChange} placeholder='Name' className='border border-[##333] w-full p-4 mt-4' />} 
            <input type="text" name='email' value={form.email} onChange={handleChange} placeholder='Email' className='border border-[##333] w-full p-4 mt-4' />
            <input type="text" name='password' onChange={handleChange} placeholder='Password' className='border border-[##333] w-full p-4 mt-3' />
            <p className='mt-2'>The email address is badly formatted.</p>
            <div className='flex flex-col lg:flex-row justify-between items-center mt-4'>
           
            <section className='flex  gap-2'>
            <p>{signIn?"Don't have an account?":'Already have an account?'}</p>
            <button type='button' onClick={handleSignIn} className='text-[#005ae2] underline'>{signIn?'Sign up':'Sign in'}</button>
            </section>
           {signIn? <button onClick={submitSignIn} className='bg-[#005ae2] rounded-full px-6 py-3 text-white'>Sign in</button>: <button onClick={ submitSignUp} className='bg-[#005ae2] rounded-full px-6 py-3 text-white'>Sign Up</button>} 
        </div>
        </form>
         
    </section>
    </div>
  )
}

export default AuthModal