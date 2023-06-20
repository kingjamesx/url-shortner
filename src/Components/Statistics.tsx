import React from 'react'

const Statistics = () => {
  return (
    <div className='flex justify-between items-center gap-[124px] '>
        
        <span className='text-[40px] font-bold' >
            <p>One Stop.</p>
            <p>Four <span className='text-[#005AE2]'>Possibilities.</span></p>
        </span>

        <section className='flex gap-20'>
            <span className='w-[88px] block'>
                <p className='font-semibold text-3xl'>3M</p>
                <p className='mt-2'>Active users</p>
            </span>
            <span className='w-[123px] block'>
                <p className='font-semibold text-3xl'>60M</p>
                <p className='mt-2'>Links & QR codes created</p>
            </span>
            <span className='w-[143px] block'>
                <p className='font-semibold text-3xl'>1B</p>
                <p className='mt-2'>Clicked & Scanned connections</p>
            </span>
            <span className='w-[123px] block'>
                <p className='font-semibold text-3xl'>300k</p>
                <p className='mt-2'>App Integrations</p>
            </span>
        </section>
    </div>
  )
}

export default Statistics