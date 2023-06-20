import React from 'react'

const Shortner = () => {
  return (
    <div className=' bg-white  rounded-[12px]  mx-auto p-5 absolute z-[999] '>
      <input type="text" placeholder='Paste URL here...' className=' px-3 border border-[#005AE2] w-full py-[12px] rounded-[12px]'/>
      <section className='flex gap-2 mt-5'>
      <select name="" id="" className='border border-[#005AE2] w-1/2 py-[12px] rounded-[12px] bg-white px-5'>
        <option value="">
        Customize domain
        </option>
      </select>
      <input type="text" placeholder='Type Alias here' className='border border-[#005AE2] w-1/2 py-[12px] px-3  rounded-[12px]'/>
      </section>
      <button className='bg-[#005AE2] w-full px-4 py-3 rounded-[100px] mt-5 text-white font-semibold text-[14px]'>Trim URL <span></span></button>
      <a href="By clicking TrimURL, I agree to the Terms of Service, Privacy Policy and Use of Cookies."></a>
    </div>
  )
}

export default Shortner