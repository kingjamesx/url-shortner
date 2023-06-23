import React from 'react'

const Cta = ({login}:{ login: () => void; }) => {
  return (
    <div className='flex flex-col items-center gap-8'>
        <h3 className='text-white text-2xl lg:text-4xl text-center mt-20 font-bold'>Revolutionizing Link Optimization</h3>
        <button onClick={login} className='mb-10 bg-[#005AE2] rounded-[100px] text-white px-6 py-3'>Get Started</button>
    </div>
  )
}

export default Cta