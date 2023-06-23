import {useState} from 'react'
import Logo from '../assets/Logo.svg'
import {AiOutlineMenu} from "react-icons/ai"
const Header = ({login}:{ login: () => void; }) => {
   const [state,setState]=useState(false)
    const handleClick=()=>{
        setState(!state)
    }
    const mobile=()=>{
        setState(!state)
        login()
    }
  return (
    <>
    <div className='flex justify-between items-center pt-[22px] px-5'>
        <span>
            <img src={Logo} alt="logo" />
        </span>
          
            <ul className='hidden  lg:flex gap-[40px] items-center'>
                <li>My URLs</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Analytics</li>
                <li>FAQs</li>
            </ul>
   
        <span className='hidden lg:flex gap-9 items-center'>
            <button className='text-[#0065FE]' onClick={login}>Log in</button>
            <button onClick={login} className='bg-[#005AE2] text-white rounded-[100px] px-6 py-3'>Try for free</button>
        </span>
        <span className='lg:hidden text-2xl' onClick={handleClick}>
        <AiOutlineMenu />
        </span>
    </div>
    <div className={`${state?'hidden':'block'} lg:hidden  bg-white   fixed w-full h-full  items-center justify-center`}>
    <ul className='flex flex-col justify-center gap-[40px] items-center'>
                <li>My URLs</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Analytics</li>
                <li>FAQs</li>
            </ul>
            <span className='flex flex-col gap-9 items-center'>
            <a href="" className='text-[#0065FE]'>Log in</a>
            <button onClick={mobile} className='bg-[#005AE2] text-white rounded-[100px] px-6 py-3'>Try for free</button>
        </span>

    </div>
    </>
  )
}

export default Header