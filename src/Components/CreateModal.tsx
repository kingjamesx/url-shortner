import {useState} from 'react'
import {GrClose} from 'react-icons/gr'
import axios from 'axios';
type Iprop={
  close:()=>void,
  setUpdate:any
}
const CreateModal = ({close,setUpdate}:Iprop) => {
  const token=localStorage.getItem('token')
  const config={
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`
    }
  }
    const [form,setForm]=useState({
        name:"",
        longUrl:""
     })
     const handleChange=(e:any)=>{
      
        setForm((prev)=>({
          ...prev,
          [e.target.name]:e.target.value
        }))
     }
     const handleSubmit= async(e:React.SyntheticEvent)=>{
      e.preventDefault()
   try{
    const rand=Math.random()
      const response=await axios.post(`${import.meta.env.VITE_BASE_URL}url/qrcode`,form,config)
      const data=await response.data.data
       console.log(data)
       setUpdate(rand)
   }catch(error){
    console.log(error)
   }
        close()
     }
  return (
    <div className='z-[1000000] fixed w-full h-full flex items-center justify-center'>
    <section className='bg-white p-6  '>
        <div className='flex justify-between items-center'>
            <p>Create short URL</p>
             <span className='cursor-pointer' onClick={close}><GrClose /></span>
        </div>

        <form>
            <input type="text" name='name' value={form.name} onChange={handleChange} placeholder='Name' className='border border-[##333] w-full p-4 mt-4' />
            <input type="text" name='longUrl' value={form.longUrl} onChange={handleChange} placeholder='Long URL' className='border border-[##333] w-full p-4 mt-3' />
            <div className='flex justify-end  mt-4'>
             <button onClick={handleSubmit}>Submit</button>
        </div>
        </form>
         
    </section>
    </div>
  )
}

export default CreateModal