import Check from '../assets/check-circle.svg'
import CheckW from '../assets/check-white.svg'

const cardArr=[
  {
    name:"Basic",
    price:"Basic",
    info:"Free plan for all users",
    offer:[
      'Unlimited URL Shortening','Basic Link Analytics',
      'Customizable Short Links','Standard Support',
      'Ad-supported'
    ]
  },
  {
    name:"Professional",
    price:"$15/month",
    info:"Free plan for all users",
    offer:[
      'Unlimited URL Shortening','Basic Link Analytics',
      'Customizable Short Links','Standard Support',
      'Ad-supported'
    ]
  },
  {
    name:"Basic",
    price:"Basic",
    info:"Free plan for all users",
    offer:[
      'Unlimited URL Shortening','Basic Link Analytics',
      'Customizable Short Links','Standard Support',
      'Ad-supported'
    ]
  }
]

const PricingCard = () => {
  return (
    <section>
      <div className="flex gap-0 items-center justify-center mt-[98px]">
         {
          cardArr.map((item=>{
            return(
              <div className={`${item.name==='Professional'?'bg-[#1E3448] py-[8rem] text-white border-none px-20':''} border border-[#005AE2] max-w-[379px] rounded-[12px] py-20 px-14`}>
              <p className='text-2xl'>{item.name}</p>
              <p className='text-[40px] font-bold'>{item.price}</p>
              <p className='mb-4'>{item.info}</p>
              <span className='inline-flex flex-col gap-6'>
                {item.offer.map(offer=>{
                  return(
                    <div className='flex items-center gap-[9px]'><span className='inline-block mt-[5px]'><img src={item.name==='Professional'?CheckW:Check} alt="check"/></span><p>{offer}</p></div>
                  )
                })}
              </span>
          </div>
            )
          }))
         }
         </div>
         <span className='flex justify-center m-[52px] font-semibold'>
         <button className='bg-[#005AE2] rounded-[100px] w-[200px] text-white py-3 px-6 '>Select Pricing</button>
         </span>
    </section>
  )
}

export default PricingCard