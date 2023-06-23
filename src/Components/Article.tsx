import Statistics from "./Statistics"
import PricingCard from './PricingCard'
import Data from '../assets/data.svg'
import Code from '../assets/qrcode.svg'
import Link from '../assets/Link.svg'
import Note from '../assets/note.svg'

const cardData=[
    {
        id:"1",
        image:Link,
        title:"URL Shortening",
        text:"Scissor allows you to shorten URLs of your business, events. Shorten your URL at scale, URL redirects."
    },
    {
        id:"2",
        image:Note,
        title:"Custom URLs",
        text:"With Scissor, you can create custom URLs, with the length you want! A solution for socials and businesses."
    },
    {
        id:"3",
        image:Code,
        title:"QR Codes",
        text:"Generate QR codes to your business, events. Bring your audience and customers to your doorstep with this scan and go solution."
    },
    {
        id:"4",
        image:Data,
        title:"Data Analytics",
        text:"Receive data on the usage of either your shortened URL, custom URLs or generated QR codes. Embedded to monitor progress."
    }
]
const Article = () => {
  return (
    <div>
        <span className="block bg-[#F9FBFD] p-14">
            <div className="max-w-[1200px] mx-auto">
            <Statistics />
            </div>
        
        </span>
        
        <article className="max-w-[1200px] mx-auto flex flex-col lg:flex-row  mt-10 justify-between px-5 lg:px-0">
            <section className="max-w-[400px] mx-auto ">
                <h2 className="text-2xl lg:text-[40px] font-bold">Why choose Scissors</h2>
                <p className="font-[500]">Scissors is the hub of everything that has to do with your link management.
                     We shorten your URLs, allow you creating custom ones for your personal, business, event usage. Our swift 
                    QR code creation, management and usage tracking with advance 
                    analytics for all of these is second to none. </p>
            </section>
            <section className="grid grid-cols-1 lg:grid-cols-2 mx-auto  gap-5 gap-y-10 ">
                {cardData.map(item=>{
                    return(
                        <div className="max-w-[340px]" key={item.id}>
                        <span>
                            <img src={item.image} alt={item.title} />
                        </span>
                        <h3 className="text-3xl font-semibold my-4">{item.title}</h3>
                        <p>{item.text}</p>
                    </div>
                    )
                })}
               
               
            </section>
                
        </article>
        <div className=" max-w-[600px] mx-auto mt-10 px-5 lg:px-0">
        <h3 className="font-bold text-4xl text-[40px] lgl:text-left text-center">A <span className="text-[#005AE2]">price perfect</span>  for your needs.</h3>
                  <p className="font-[500] text-center mt-4 ">From catering for your personal, business, event, socials needs,
                     you can be rest assured we have you in mind in our pricing.</p>
        </div>
       
                     <PricingCard/>
    </div>
  )
}

export default Article