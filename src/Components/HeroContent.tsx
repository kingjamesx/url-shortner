import Ads from '../assets/Heroads.png'
import Vector from '../assets/Vector 3.svg'
const HeroContent = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center' >
        <span className='text-5xl font-bold mt-[100px]'>
       <p>Optimize Your Online Experience with Our</p>
       <p className='mt-10'>Advanced <span className='inline-flex flex-col items-center gap-2 text-[#005AE2]'>
        <p>URL Shortening</p>
         <span><img src={Vector} alt="" /></span>
        </span>  Solution</p> 
        </span>
        <p className='max-w-[700px] mt-4 text-lg font-[500]'>
        Personalize your shortened URLs to align with your brand identity. Utilize custom slugs, branded links, and domain customization options to reinforce your brand presence and enhance user engagement.
        </p>
        <div className='flex items-center gap-[56px] mt-8'>
            <button className='px-4 py-3 bg-[#005AE2] rounded-[100px] w-[142px] text-white'>Sign Up</button>
            <a href="" className='text-[#0065FE]'>Learn more</a>
        </div> 
        <span className='block mt-12'>
         <img src={Ads} alt="ads" />
        </span>
    </div>
  )
}

export default HeroContent