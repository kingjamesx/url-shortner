import { useState } from "react"
import Hero from "../Components/Hero"
import Article from "../Components/Article"
import Shortner from '../Components/Shortner'
import Footer from '../Components/Footer'
import Cta from "../Components/Cta"
import Faq from "../Components/Faq"
import Group1 from '../assets/footergroup1.png'
import Group2 from '../assets/footergroup2.png'
import cta1 from '../assets/ctagroup1.png'
import cta2 from '../assets/ctagroup2.png'
import SG1 from '../assets/shortnergroup1.svg'
import SG2 from '../assets/shortnergroup2.svg'
import faq1 from '../assets/faqgroup1.svg'
import faq2 from '../assets/faqgroup2.svg'
import AuthModal from "../Components/AuthModal"
const Home = () => {
  const [modal,setModal]=useState(false)
  const closeModal=()=>{
     setModal(false)
  }
  const handleLogin=()=>{
        setModal(true)
  }
  return (
    <main className="relative " >
     {modal && <span 
        className= 'bg-[rgba(0,0,0,0.4)] w-full h-screen fixed z-1000'
      ></span> }  
       {modal && <div><AuthModal close={closeModal}/></div>} 
    <div className="bg-bg bg-cover  bg-bottom bg-no-repeat  pb-20">
      <section className='max-w-[1200px] mx-auto'>
      <Hero login={handleLogin}/>
      </section>
    </div>
    <div>
       <Article />
    </div>
  
    <section className="bg-[#1E3448]  relative p-32 lg:p-56">
      <span className="hidden lg:block absolute top-0 left-0">
        <img src={SG1} alt="" />
      </span>
      <div className="p-[20px] mx-auto lg:w-[500px]  flex justify-center items-center  z-[999]">
      <Shortner login={handleLogin}/>
      </div>
      
        <span className="hidden lg:block absolute right-0 -bottom-[0px]  z-10 ">
        <img src={SG2} alt="" /> 
        </span>
       

    </section>
    <section className="relative">
      <span className="hidden lg:block absolute"><img src={faq1} alt="" /></span>
      <Faq />
      <span className="hidden lg:block absolute right-0 -bottom-[80px]"><img src={faq2} alt="" /></span>
    </section>
    <section className="bg-[#1E3448] relative pb-10">
      <span className="hidden lg:block absolute">
        <img src={cta1} alt="" />
      </span>
      <Cta login={handleLogin}/>
      <span className="hidden lg:block absolute right-0 -top-[18px]">
      <img src={cta2} alt="" />

      </span>
    </section>
    <section className="relative">
      <span className="hidden lg:block absolute -bottom-20">
        <img src={Group1} alt="" />
      </span>
      <div className='max-w-[1200px] mx-auto mt-20'>
      <Footer/>
      </div>
     
      <span className="hidden lg:block absolute right-0 -bottom-[80px]">
        <img src={Group2} alt=""  />
      </span>
    </section>
    </main>
  )
}

export default Home