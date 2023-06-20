import Minus from '../assets/minus.svg'
import Plus from '../assets/plus.svg'
import { useState } from 'react'
const faqs=[
    {   
        id:1,
        title:'How does URL shortening work?',
        text:'URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.'
    },
    {   
        id:2,
        title:'Is it necessary to create an account to use the URL shortening service?',
        text:'URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.'
    },
    {   
        id:3,
        title:'Are the shortened links permanent? Will they expire?',
        text:'URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.'
    },
    {   
        id:4,
        title:'Are there any limitations on the number of URLs I can shorten?',
        text:'URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.'
    },
    {
        id:5,
        title:'Can I customize the shortened URLs to reflect my brand or content?',
        text:'URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.'
    },
    {
        id:6,
        title:'Can I track the performance of my shortened URLs?',
        text:'URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.'
    },
    {
        id:7,
        title:'How secure is the URL shortening service? Are the shortened links protected against spam or malicious activity?',
        text:'URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.'
    },
    { 
        id:8,
        title:'What is a QR code and what can it do?',
        text:'URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.'
    },
    {
        id:9,
        title:'Is there an API available for integrating the URL shortening service into my own applications or websites?',
        text:'URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.'
    },

    
]
const Faq = () => {
    const [state,setState]=useState<null|number>(null)
    const handleClick=(id:number)=>{
      if(id===state){
        setState(null)
      }else{
        setState(id)
      }
    
    }
  return (
    <section>
        <div className=' w-[744px] mx-auto text-[20px] mt-10 pb-24'>
            <p className='text-center font-bold text-[40px]'>Faqs</p>
            {faqs.map(item=>{
                return(
                    <div className='border-[#D6D6D6] border-b p-4'>
                    <div onClick={()=>handleClick(item.id)} className='flex justify-between items-center'><p className='w-[90%]'>{item.title}</p><span><img src={item.id===state?Minus:Plus} alt="sign" /></span></div>
                    <p className={ item.id===state?'block text-base':'hidden'}>{item.text}</p>
                    </div>
                )
            })}
           
        </div>
    </section>
  )
}

export default Faq