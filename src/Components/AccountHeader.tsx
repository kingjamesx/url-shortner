import Logo from '../assets/Logo.svg'
import { useNavigate } from 'react-router-dom'


const AccountHeader = () => {
  const navigate=useNavigate()
 
  const handlelogOut=()=>{
      localStorage.clear()
      navigate('/')
  }
  return (
    <div className='bg-[#03142f] py-5' >
    <header className='flex justify-between max-w-[1200px] mx-auto '>
        <div>
        <img src={Logo} alt="scissors Logo" />
        </div>
        <div className='flex gap-5 text-white font-bold'>
            <button>Links</button>
            <button onClick={handlelogOut}>Logout</button>
        </div>
    </header>
    </div>

  )
}

export default AccountHeader