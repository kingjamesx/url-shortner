import React from 'react'
import Logo from '../assets/Logo.svg'
const Header = ({login}:{ login: () => void; }) => {
  return (
    <div className='flex justify-between items-center pt-[22px]'>
        <span>
            <img src={Logo} alt="logo" />
        </span>
        
            <ul className='flex gap-[40px] items-center'>
                <li>My URLs</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Analytics</li>
                <li>FAQs</li>
            </ul>
   
        <span className='flex gap-9 items-center'>
            <a href="" className='text-[#0065FE]'>Log in</a>
            <button onClick={login} className='bg-[#005AE2] text-white rounded-[100px] px-6 py-3'>Try for free</button>
        </span>
    </div>
  )
}

export default Header