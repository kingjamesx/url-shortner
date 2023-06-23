import Logo from '../assets/footerlogo.svg'
import Twitter from '../assets/twiiter.png'
import Facebook from '../assets/facebook.png'
import Instagram from '../assets/instagram.png'
import Linkedin from '../assets/linkedin.png'
import footergroup1 from '../assets/footergroup1.png'
import footergroup2 from '../assets/footergroup2.png'
const footer =[
    {
      id:1,
      title:"Why Scissor ?",
      Links:[
        "Scissor 101","Integrations", "API Pricing"
      ]
    },
     {
      id:2,
      title:"Solutions",
      Links:[
        "Social Media","Digital Marketing", "Customer Service","For Developers" 
      ]
    },
     {
      id:3,
      title:"Products",
      Links:[
        "Link Management", "QR Codes","Link-in-bio"
      ]
    },
     {
      id:4,
      title:"Company",
      Links:[
        "About", "Scissor","Careers","Partners","Press","Contact","Reviews"
      ]
    },
     {
      id:5,
      title:"Resources",
      Links:[
        "Blog","Resource Library","Developers","App Connectors","Support","Trust Center",
        "Browser Extension",
        "Mobile App"
      ]
    },
     {
      id:6,
      title:"Features",
      Links:[
        "Branded Links",
        "Mobile Links",
        "Campaign",
        "Management & Analytics",
        "QR Code generation"
      ]
    },
      {
      id:7,
      title:"Legal",
      Links:[
        "Privacy Policy",
        "Cookie Policy",
        "Terms of Service",
        "Acceptable Use Policy",
        "Code of Conduct"
      ]
    }
]
const social=[
   {
     id:1,
     name:"Twitter",
     logo:Twitter
   },
   {
    id:1,
    name:"Instagram",
    logo:Instagram
  },
  {
    id:1,
    name:"Linkedin",
    logo:Linkedin
  }, {
    id:1,
    name:"Facebook",
    logo:Facebook
  }
]
const Footer = () => {
  return (
    <>
    <div className=" flex flex-col lg:flex-row  justify-center gap-20 ">
        <section className='flex flex-col gap-10 items-center'>
          <span>
            <img src={Logo} alt="logo" />
          </span>
          <div className='flex gap-6'>
         {social.map(item=>{
          return(
            <span>
            <img src={item.logo} alt={item.name} />
          </span>
          )
         })}
          </div>
        </section>
        <section className='grid grid-cols-3 lg:grid-cols-4 gap-x-8 mx-auto px-5'>
          {footer.map(item=>{
            const arr=item.Links
            return (
                  <div>
                 <h3 className='font-bold'>{item.title}</h3>
                 {arr.map(item=>{
                  return(<p>{item}</p>)
                 })}
                 </div>)
          })}
        </section>
        </div>
        <p className='lg:text-right text-center'>Term of Service | Security| ⓒ Scissor 2023</p>
        </>
    
  )
}

export default Footer