import {useState,useEffect} from 'react'
import AccountHeader from '../Components/AccountHeader'
import LinkCard from '../Components/LinkCard'
import CreateModal from '../Components/CreateModal'
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import DeleteModal from '../Components/DeleteModal';
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
    const [deleteModal,setDeleteModal]=useState(false)
    const [data,setData]=useState([{_id:"",createdAt:'', longUrl:'', shortUrl:'', count:''}])
    const [update,setUpdate]=useState(0)
    const [id,setId]=useState('')

    useEffect(()=>{
      getUrl()
    },[update])

    const closeModal=()=>{
        setModal(false)
        setDeleteModal(false)
    }
    const handleClick=()=>{
         setModal(true)
    }
    const handleDeleteClick=(id:string)=>{
      setId(id)
      setDeleteModal(true)
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
    const getQr=async(_id:String)=>{
     const url=data.find(item=>item._id===_id)?.longUrl
     const form={
      "longUrl": url
     }
       try{
         const response =await axios.post(`${import.meta.env.VITE_BASE_URL}url/qrcode`,form,config)
         const data=await response.data
         console.log(data)
       }catch(error){
        console.log(error)
       }
    }
    const deleteLink=async()=>{
      try{
        const response =await axios.delete(`${import.meta.env.VITE_BASE_URL}url/${id}`,config)
        const data=await response.data
        setUpdate(Math.random())
        console.log(data)
      }catch(error){
       console.log(error)
      }finally{
        closeModal()
      }
    }
 

  return (
    <div>
          {modal && <span 
        className= 'bg-[rgba(0,0,0,0.4)] w-full h-screen fixed z-1000'
      ></span> } 
         {deleteModal && <span 
        className= 'bg-[rgba(0,0,0,0.4)] w-full h-screen fixed z-1000'
      ></span> } 
        {modal && <CreateModal close={closeModal} setUpdate={setUpdate} />   }
           {deleteModal &&<DeleteModal close={closeModal} deleteLink={deleteLink} />}
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
                        <div  key={item._id}>
                        <LinkCard {...item} getQr={getQr} onClick={handleDeleteClick}/>
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