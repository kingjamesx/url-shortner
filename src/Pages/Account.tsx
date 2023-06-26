import {useState,useEffect} from 'react'
import AccountHeader from '../Components/AccountHeader'
import LinkCard from '../Components/LinkCard'
import CreateModal from '../Components/CreateModal'
import axios from 'axios';
import { ToastContainer } from 'react-toastify';

const dummyData=[
    {
        id:"1",
        createdAt:new Date(),
        name:"my website",
        longURL:"https://google.com",
        shortCode:"masdo",
        totalClicks:313

    }
]
const Account = () => {
  const token=localStorage.getItem('token')
    const config={
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`
        }
      }
   
 
    const [links,setLinks]=useState([])
    const [modal,setModal]=useState(false)
    const [data,setData]=useState([{id:"",createdAt:'', longUrl:'', shortUrl:'', count:''}])
    const [update,setUpdate]=useState(0)

    useEffect(()=>{
      getUrl()
    },[update])

    const closeModal=()=>{
        setModal(false)
    }
    const handleClick=()=>{
         setModal(true)
    }
    const getUrl=async()=>{
        try{
            const response=await axios.get(`${import.meta.env.VITE_BASE_URL}url`,config)
            const data=await response.data.data
             console.log(data)
             setData(data)
         }catch(error){
          console.log(error)
         }
    }

  return (
    <div>
          {modal && <span 
        className= 'bg-[rgba(0,0,0,0.4)] w-full h-screen fixed z-1000'
      ></span> } 
        {modal && <CreateModal close={closeModal} setUpdate={setUpdate}/>   }

       <AccountHeader />
       <main className='mx-auto max-w-[1000px]'>
       <section className='flex gap-5 py-5 mt-5'>
            <h1 className='text-[32px] font-semibold'>Links</h1>
            <button onClick={handleClick} className='bg-[#56b7ba] text-white px-5 py-1  rounded-md font-bold'>Create New</button>
        </section>
        <section>
      <ToastContainer />

            {
                data.map(item=>{
                    return(
                        <div  key={item.id}>
                        <LinkCard {...item}/>
                        </div>
                    )
                })
            }
           
        </section>
       </main>
   
    </div>
  )
}

export default Account